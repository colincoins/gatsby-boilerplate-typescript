const path = require('path');

const pathResolve = dir => path.join(__dirname, dir);

exports.modifyWebpackConfig = ({ config }) => {
  // console.log(JSON.stringify(config.resolve(), null, 4));

  config.loader('tslint', {
    test: /\.ts$/,
    exclude: /node_modules/,
  });

  config.merge({
    resolve: {
      extensions: ['.ts', '.tsx', '.json', '.scss'],
      alias: {
        '@': pathResolve('src')
      }
    }
  });

  return config;
};