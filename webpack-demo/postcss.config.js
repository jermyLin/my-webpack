var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
module.exports = {
  plugins: [autoprefixer({browsers: ['last 5 versions']})]
  
};