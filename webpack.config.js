const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
        name: 'Host',
        remotes: {
            OurReactComponent: 'OurReactComponent@https://graphan.github.io/micro-react-webpack-module/remoteEntry.js',
        },
        shared: {
            react: { singleton: true, eager: true },
            "react-dom": { singleton: true, eager: true }
        },
    }),
  ],
};