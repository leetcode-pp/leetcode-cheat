module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.entry = {
    main: "./src/index.js",
    content: "./src/contentScript.js",
    inject: "./src/inject.js",
  };
  config.optimization.runtimeChunk = false;

  // config.optimization.splitChunks = void 0;
  config.output.filename = "static/js/[name].js";
  config.output.chunkFilename = "static/js/[name]-[hash].chunk.js";
  const cssPlugin = config.plugins[5];
  cssPlugin.options.filename = "static/css/[name]-[hash].css";
  cssPlugin.options.chunkFilename = "static/css/[name]-[hash].chunk.css";
  return config;
};
