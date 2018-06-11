const rewireStyl = require("react-app-rewire-stylus-modules");

module.exports = function override(config, env) {
  
  config = rewireStyl(config, env);
  
  // with loaderOptions
  // (not yet implemented)
  // config = rewireStyl.withLoaderOptions({
  //     modifyVars: {
  //       "@primary-color": "#1890ff",
  //     },
  //   })(config, env);

  return config;
};