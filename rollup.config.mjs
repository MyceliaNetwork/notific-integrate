import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import commonjs from "@rollup/plugin-commonjs"

function createConfig() {
  return {
    input: `./packages/notific-integrate/index.ts`,
    plugins: [resolve({ browser: true }), typescript(), commonjs()],
    // indicate which modules should be treated as external
    external: ["zod", "@dfinity/principal"],
    output: [
      {
        name: "notific-integrate",
        file: `./packages/notific-integrate/dist/notific-integrate.umd.js`,
        format: `umd`,
        exports: `named`,
        sourcemap: true,
        globals: { zod: "zod", "@dfinity/principal": "@dfinity/principal" },
      },
      {
        name: "notific-integrate",
        file: `./packages/notific-integrate/dist/notific-integrate.esm.js`,
        format: `esm`,
        exports: `named`,
        sourcemap: true,
        globals: { zod: "zod", "@dfinity/principal": "@dfinity/principal" },
      },
    ],
  }
}

export default [createConfig()]
