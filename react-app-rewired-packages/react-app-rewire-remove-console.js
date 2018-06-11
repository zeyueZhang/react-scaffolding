const { injectBabelPlugin } = require('react-app-rewired')

const rewireRemoveConsole = (config, env) => {
  // remove console.log
  if (env === 'production') {
    console.log("⚡ Console.log removed on Production")
    const optionRemoveConsole = {
      plugins: [['transform-remove-console', { exclude: ['error', 'warn'] }]]
    };
    config = injectBabelPlugin(['transform-remove-console', optionRemoveConsole], config);
  }

  return config
}

module.exports = rewireRemoveConsole
