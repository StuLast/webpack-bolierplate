const path = require('path');

module.exports = {
  entry: ['core-js/stable', 'regenerator-runtime/runtime', './src/app.js'],
  output: {
    path: path.resolve(__dirname,'public_html/assets/scripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/, 
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
            presets: ['@babel/env']
        } 
      }
    }]
  },
  devServer: {
    contentBase: path.resolve(__dirname,'public_html'),
    publicPath: '/assets/scripts'
  },
  devtool: 'source-map'
}
