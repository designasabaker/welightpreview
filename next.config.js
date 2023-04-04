/** @type {import('next').NextConfig} */
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      //...
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  output: 'export',
}

