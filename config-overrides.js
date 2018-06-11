const {injectBabelPlugin} = require('react-app-rewired')
const rewireStyl = require("./react-app-rewired-packages/react-app-rewire-stylus-modules")
const rewireAlias = require('./react-app-rewired-packages/react-app-rewire-alias')
const rewireRemoveConsole = require('./react-app-rewired-packages/react-app-rewire-remove-console')

module.exports = function override(config, env) {

  // config = injectBabelPlugin('/emotion/babel',config)

  // alias
  config = rewireAlias(config, env)

  /**
   * css modules
   *   1. *.css *.styl 不使用模块
   *   2. *.module.css *.module.styl 使用模块
   */
  config = rewireStyl(config, env)
  
  config = rewireRemoveConsole(config, env)

  return config;
};