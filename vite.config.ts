/* eslint-disable no-useless-concat */
/* eslint-disable no-console */
import { defineConfig, loadEnv, Plugin, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import tsconfigPaths from 'vite-tsconfig-paths'
import rollupNodePolyFill from 'rollup-plugin-polyfill-node'
import NodeGlobalsPolyfillPlugin from '@esbuild-plugins/node-globals-polyfill'
import fs from 'fs'
import markdownPlugin, { Mode } from 'vite-plugin-markdown'
import prismPlugin from 'vite-plugin-prismjs'

/*
 * https://vitejs.dev/config/
 */

type BuildMode = 'development' | 'test' | 'production'

const getDevServerConfig = () => ({
  port: 3000,
  // Dev server requires a trusted cert is setup in order to load web workers - see README/Develop
  https: {
    cert: fs.readFileSync('../.cert/cert.pem'),
    key: fs.readFileSync('../.cert/key.pem'),
  },
  host: '0.0.0.0',
  hmr: { clientPort: 3000 },
  open: true,
})

/**
 * Maybe TODO: create default 'coverage' directories for CI tests
 */
const getPluginConfig = (mode: BuildMode) => {
  const plugins: UserConfig['plugins'] = [
    react(),
    markdownPlugin({ mode: [Mode.HTML] }),
    prismPlugin({
      languages: ['javascript', 'typescript', 'jsx', 'tsx', 'css', 'markup'],
      plugins: ['line-numbers'],
      css: true,
    }),
    tsconfigPaths(),
  ]

  if (mode === 'test') return plugins

  return plugins.concat(
    checker({
      overlay: { initialIsOpen: false, position: 'bl' },
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.tsx"',
        dev: { logLevel: ['error', 'warning'] },
      },
    })
  )
}

export default ({ mode }: { mode: BuildMode }) => {
  console.log('Hello from Vite config')
  console.log(`Building in mode: ${mode}`)

  const viteEnvVars = loadEnv(mode, process.cwd())
  Object.assign(process.env, viteEnvVars)

  return defineConfig({
    plugins: getPluginConfig(mode),
    server: mode === 'development' ? getDevServerConfig() : undefined,
    resolve: { alias: { stream: 'stream-browserify' } },
    define: { 'process.env': { ...viteEnvVars, NODE_ENV: mode } },
    optimizeDeps: {
      esbuildOptions: {
        define: { global: 'globalThis' },
        plugins: [NodeGlobalsPolyfillPlugin({ buffer: true, process: true })],
      },
    },
    build: {
      manifest: 'asset-manifest.json',
      sourcemap: 'hidden',
      outDir: 'build',
      rollupOptions: {
        // eslint-disable-next-line
        plugins: [rollupNodePolyFill() as Plugin],
        input: { index: './index.html' },
        output: { entryFileNames: () => 'assets/[name]-[hash].js' },
      },
    },
    esbuild: {
      // Prevents redundant warning, `Top-level "this" will be replaced with undefined since this file is an ECMAScript module`
      logOverride: { 'this-is-undefined-in-esm': 'silent' },
    },
  })
}
