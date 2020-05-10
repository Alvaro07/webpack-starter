const HtmlWebpackPlugin = require('html-webpack-plugin')

const jsRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        ['@babel/preset-env',
          {
            targets: {
              browsers: ['> 1%', 'last 2 versions', 'not ie <= 10']
            }
          }
        ]
      ]
    }
  }
}

const stylesRules = {
  test: /\.scss$/i,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ]
}

// const fontsRules = {
//   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
//   use: [
//     {
//       loader: 'file-loader',
//       options: {
//         name: '[name].[ext]',
//         outputPath: 'fonts/'
//       }
//     }
//   ]
// }

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: './app.[contentHash].js'
  },
  module: {
    rules: [jsRules, stylesRules]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}
