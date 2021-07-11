const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'public_html/scripts'),
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
    publicPath: '/scripts'
  }
}
