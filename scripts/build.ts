#!/usr/bin/env -S deno run -A
// deno-lint-ignore-file no-explicit-any

import * as dnt from "jsr:@deno/dnt@0.41.3";
import * as fs from "jsr:@std/fs@1.0.6";
import * as path from "jsr:@std/path@1";
import * as semver from "jsr:@std/semver@1.0.3";
import * as dax from "jsr:@david/dax@0.44.1";
import { colors } from "jsr:@cliffy/ansi@1.0.0-rc.8/colors";

import denoJson from "../deno.json" with { type: "json" };
import process, { env } from "node:process";

const JSR_SCOPE = "nick", NPM_SCOPE = "nberlette", OUT_DIR = "./npm";

// fetch the latest version from jsr.io to ensure this is a build
// that's worth publishing. otherwise, we'll just skip it.
type JsrMetadata = {
  scope: string;
  name: string;
  latest: string;
  versions: { [version: string]: Record<string, any> };
};

type NpmMetadata = {
  name: string;
  versions: {
    [version: string]: dnt.PackageJson & {
      _id: string;
      _nodeVersion: string;
      _npmVersion: string;
      _npmUser: {
        name: string;
        email: string;
      };
      _npmOperationalInternal: {
        host: string;
        tmp: string;
      };
      _hasShrinkwrap: boolean;
      dist: {
        integrity: string;
        shasum: string;
        tarball: string;
        signatures: object[];
        fileCount: number;
        unpackedSize: number;
      };
      directories: {
        lib: string;
      };
      [x: string]: unknown;
    };
  };
  "dist-tags": {
    latest?: string;
    [x: string]: string | undefined;
  };
  [x: string]: unknown;
};

async function getJsrMetadata(
  name: string,
): Promise<JsrMetadata | undefined> {
  try {
    return await $.request(`https://jsr.io/${name}/meta.json`)
      .timeout("5s")
      .showProgress(true).noThrow().json();
  } catch {
    return undefined;
  }
}

async function getNpmMetadata(
  name: string,
): Promise<NpmMetadata | undefined> {
  try {
    $.logLight(`🔍 fetching ${red.bold("npm")} package metadata for ${name}`);
    return await $.request(`https://registry.npmjs.org/${name}`)
      .timeout("5s")
      .showProgress(true).noThrow().json();
  } catch {
    return undefined;
  }
}

async function getLatestVersion(
  name: string,
  npm = false,
): Promise<semver.SemVer | undefined> {
  const meta = await getVersions(name, npm);
  return meta.latest;
}

function getMetadata(
  name: string,
  npm?: false,
): Promise<JsrMetadata | undefined>;
function getMetadata(name: string, npm: true): Promise<NpmMetadata | undefined>;
function getMetadata(
  name: string,
  npm?: boolean,
): Promise<JsrMetadata | NpmMetadata | undefined>;
function getMetadata(name: string, npm?: boolean) {
  return npm ? getNpmMetadata(name) : getJsrMetadata(name);
}

async function getVersions(name: string, npm?: boolean): Promise<{
  latest: semver.SemVer | undefined;
  versions: semver.SemVer[];
}> {
  const meta = await getMetadata(name, npm);

  if (meta?.versions) {
    const tags = "dist-tags" in meta ? meta["dist-tags"] : meta;
    const versions = Object.keys(meta.versions)
      .map(semver.tryParse).filter((v) => v != null).sort(semver.compare);
    const latest = semver.tryParse(tags.latest ?? "") ?? versions.at(-1);

    return { latest, versions };
  }

  return { latest: undefined, versions: [] as semver.SemVer[] };
}

function isTTY(): boolean {
  return process.stdout.isTTY || env.CI == null;
}

let registry = env.NPM_REGISTRY_URL || env.NPM_REGISTRY ||
  env.NPM_CONFIG_REGISTRY || "https://registry.npmjs.org";

let tag = env.DIST_TAG || env.NPM_DIST_TAG || "latest";

const base = new dax.Path(
  path.fromFileUrl(import.meta.resolve("../deno.json")),
).parentOrThrow();

// tmp dir used for building
const tmp = new dax.Path(await Deno.makeTempDir({ prefix: "math-" }));

const deno = dax.build$({
  commandBuilder: new dax.CommandBuilder().cwd(base).command([
    "deno",
    "run",
    "-A",
  ]).env({
    DENO_FUTURE: "1",
  }),
  extras: {
    ansi: colors,
    async run(...args: string[]): Promise<Uint8Array | undefined> {
      const res = await deno`deno run -A ${args}`;
      return res.stdoutBytes;
    },
    async fmt(...args: string[]): Promise<void> {
      await deno`deno fmt ${args}`;
    },
  },
});

const $ = dax.build$({
  commandBuilder: new dax.CommandBuilder().cwd(base),
  extras: {
    ansi: colors,
    glob: fs.expandGlob,
    globSync: fs.expandGlobSync,
    walk: fs.walk,
    walkSync: fs.walkSync,
    deno: deno,
    async getNextVersion(
      version: string,
      latest?: semver.SemVer,
      current?: semver.SemVer,
    ): Promise<string> {
      if (!latest && !current) return version;
      latest ||= current;
      current ||= latest;

      if (!isTTY()) return version;

      const prerelease = current?.prerelease ?? [];
      const options = [
        "none",
        "prepatch",
        "preminor",
        "premajor",
        "prerelease",
        "pre",
        "patch",
        "minor",
        "major",
      ] as const;

      const candidates = options.map((t) =>
        [
          t,
          semver.format(
            t === "none" ? current! : semver.increment(current!, t),
          ),
        ] as const
      );

      const index = await $.select({
        message: `🔍 Select a SemVer release type for new version ${
          $.ansi.dim(`(current: ${underline.bold.brightYellow(version)})`)
        }`,
        options: [...candidates].map(([t, v], i) =>
          `${t} -> ${bold.brightGreen(v)}${
            i === 0 ? $.ansi.dim(" (default, no change)") : ""
          }`
        ).concat([`custom ${$.ansi.dim("(input manually)")}`]),
        noClear: true,
      });

      if (index != null) {
        let v2 = candidates[index][1] as string | undefined;
        if (index > candidates.length || v2 == null) {
          v2 = await $.maybePrompt(
            `Enter a new version for ${bold.brightCyan(name)} ${
              $.ansi.dim(`(current: ${underline.bold.brightYellow(version)})`)
            }:`,
            {
              default: semver.format(
                semver.increment(
                  current!,
                  prerelease.length ? "prerelease" : "patch",
                ),
              ),
            },
          );
        }
        return v2 ?? version;
      }
      return version;
    },
    getVersions,
    getLatestVersion,
    isTTY,
    getJsrMetadata,
    getNpmMetadata,
    getMetadata,
  },
});

const { bold, underline, red, yellow } = colors();

async function main() {
  let { name, version, license, author } = denoJson;
  const description =
    "Standalone implementation of the entire native Math interface, along with other useful type guards, constants, and utilities. Zero dependencies.";

  const finalOutDir = base.join(OUT_DIR).resolve();
  const outDir = await tmp.join(OUT_DIR).resolve().ensureDir();
  const npmName = name.replace(`@${JSR_SCOPE}/`, `@${NPM_SCOPE}/`);

  let proceed = true;
  const meta = await getJsrMetadata(name);
  if (!meta) {
    proceed = isTTY() && await $.confirm(
      `❓ ${bold.underline(name)} not found on ${
        yellow("jsr.io")
      }. Continue anyway?`,
      { default: false, noClear: true },
    );
  }

  if (!proceed) {
    $.logWarn("⚠️ SKIP", `skipping build for ${name}@${version}`);
    return;
  }

  const latest = await getLatestVersion(name);
  const current = semver.tryParse(version);

  const isNewVersion = (!latest && !!current) ||
    (!!latest && !!current && semver.greaterThan(current, latest));

  if (!isNewVersion && isTTY()) {
    version = await $.getNextVersion(version, latest, current);
  }

  await build();

  if (env.NO_PUBLISH !== "1") {
    const publish = !isTTY() || await $.confirm(
      `🚀 publish ${npmName} to ${red.bold("npm")}?`,
      {
        default: true,
      },
    );
    if (publish) {
      if (isTTY()) {
        const distTag = await $.maybePrompt(
          `NPM dist tag to associate with this version`,
          {
            default: tag,
            noClear: true,
          },
        );
        if (distTag) tag = distTag;
      }
      await $`npm publish --access public --registry ${registry} --tag ${tag}`
        .cwd("npm");
    }
  }

  async function preBuild() {
    await base.join("src").copy(tmp, { overwrite: true });
    await base.join("deno.json").copyToDir(tmp);

    await outDir.ensureDir();
    await outDir.emptyDir();
    await Promise.all([
      "LICENSE",
      "README.md",
    ].map((f) => base.join(f).copyToDir(outDir)));

    // move all src files up one level, update the imports/exports
    // in index.ts and deno.json, and remove the src dir. this is
    // necessary so dnt doesn't create a nested src dir in the npm
    // package (which, while technically functional, is not idiomatic).
    const indexTs = tmp.join("index.ts");

    let src = await indexTs.readText();
    src = src.replace(/\.\/src\//g, "./");
    await indexTs.writeText(src);
    const denoJson = tmp.join("deno.json");

    let json = await denoJson.readText();
    json = json.replace(/(?<=")\.\/src\//g, "./");
    await denoJson.writeText(json);
  }

  async function build() {
    await preBuild();

    const exports = Object.entries(denoJson.exports).reduce(
      (o, [k, v]) => {
        v = v.replace(/^\.\//, "").replace(/(?:\.d)?\.ts$/, "");
        v = v.replace(/^src\//, "");
        v = v === "mod" ? "index" : v;
        (o as any)[k] = {
          types: `./esm/${v}.d.ts`,
          import: {
            types: `./esm/${v}.d.ts`,
            default: `./esm/${v}.js`,
          },
          "module-sync": {
            types: `./esm/${v}.d.ts`,
            default: `./esm/${v}.js`,
          },
          require: {
            types: `./cjs/${v}.d.ts`,
            default: `./cjs/${v}.js`,
          },
          default: `./esm/${v}.js`,
        };
        return o;
      },
      {} as {
        [E in keyof typeof denoJson.exports]: {
          types: string;
          import: { types: string; default: string };
          "module-sync"?: { types: string; default: string };
          require: { types: string; default: string };
          default: string;
        };
      },
    );

    const packageJson = {
      name: npmName,
      version,
      license,
      author,
      private: false,
      publishConfig: {
        access: "public",
        registry,
        tag,
      },
      type: "module",
      description,
      keywords: [
        "math",
        "utilities",
        "arithmetic",
        "trigonometry",
        "standalone",
        "mersenne-twister",
        "ponyfill",
        "deno",
        "bun",
        "node",
        "embedded",
        "typescript",
      ],
      repository: "https://github.com/nberlette/math.git",
      homepage: "https://jsr.io/@nick/math/doc",
      readme: "https://github.com/nberlette/math#readme",
      bugs: "https://github.com/nberlette/math/issues",
      types: exports["."].import.types ?? exports["."].types,
      main: exports["."].require.default,
      module: exports["."].import.default,
      exports,
    };

    // build esm + cjs with dnt
    await dnt.build({
      entryPoints: [tmp.join("index.ts").toString()],
      outDir: outDir.toString(),
      compilerOptions: {
        target: "ES2020",
        sourceMap: true,
        skipLibCheck: true,
        lib: ["ESNext"],
        strictNullChecks: true,
        strictFunctionTypes: true,
        strictBindCallApply: true,
      },
      declaration: "inline",
      esModule: true,
      package: packageJson,
      packageManager: "npm",
      shims: {},
      scriptModule: "cjs",
      skipNpmInstall: true,
      skipSourceOutput: false,
      test: false,
      typeCheck: false,
      async postBuild() {
        $.logStep("📦 BUILT", `${name}@${version} successfully`);

        const cjsDir = outDir.join("cjs");
        await outDir.join("script").rename(cjsDir);
        $.logStep("MOVED", "./script -> ./cjs");

        const cjsPkgJson = cjsDir.join("package.json");
        await cjsPkgJson.ensureFile();
        $.logStep("CREATE", cjsPkgJson.toString());

        await cjsPkgJson.writeJsonPretty({ type: "commonjs" });
        $.logStep("UPDATE", ".type='commonjs' in " + cjsPkgJson);

        await outDir.copy(finalOutDir.resolve(), { overwrite: true });
        $.logStep("MOVED", `${outDir} [tmp] -> ${finalOutDir}`);
      },
    });
  }
}
if (import.meta.main) await main();
