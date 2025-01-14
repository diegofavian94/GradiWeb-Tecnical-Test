const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Set mode based on environment
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  // Main entry point
  entry: './src/app.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
    clean: true,
    assetModuleFilename: 'assets/[name][ext]'
  },

  // Development settings
  watch: process.env.NODE_ENV === 'development',
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000
  },

  // Source maps for debugging
  devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',

// Module rules for different file types
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|avif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]'
        }
      },
    ],
  },

 //Plugins 
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'assets',  
          to: 'assets'   
        }
      ]
    })
  ]
};