// Tells Storybook where to look for the Storybook files, 
// and to use the knobs addon (which is useful for when working with props).
// Includes Webpack rule to tell Storybook to load Sass files

const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.[tj]s'],
  addons: ['@storybook/addon-knobs/register'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../src'),
    });
  
    return config;
  }
}