const path = require('path');

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
  entry: './App/Assets/Scripts/main.js',
  mode: 'development',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'App'),
  },
  devServer: {
    // proxy: { // proxy URLs to backend development server
    //   '/api': 'http://localhost:3000'
    // },
    static: path.join(__dirname, 'App'), // boolean | string | array | object, static file location
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", {loader: "postcss-loader", options: {postcssOptions: {plugins: postCSSPlugins}}}],
      },
    ],
  },
};