export default [
    {
      input: 'src/index.js',
      output: [
        {
          format: 'esm',
          file: 'dist/library.mjs'
        },
        {
          format: 'cjs',
          file: 'dist/library.js'
        }
      ],
      plugins: [
        vue(), peerDepsExternal()
      ]
    }
  ]