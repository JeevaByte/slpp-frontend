module.exports = function override(config, env) {
    config.module.rules.push({
      test: /\.js$/,
      enforce: 'pre',
      loader: 'source-map-loader',
      exclude: /node_modules\/@zxing\/browser/,
    });
    return config;
  };
  