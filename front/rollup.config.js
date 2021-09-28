// rollup.config.js
import html from 'rollup-plugin-html'
import css from 'rollup-plugin-import-css'

export default {
  input: './index.js',
  plugins: [
    html({
      include: '**/*.html'
    }),
    css()
  ],
  output: {
    file: '../dist/index.js',
    name: 'MyModule',
    format: 'umd'
  }
}
