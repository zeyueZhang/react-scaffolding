const resolve = dir => require('path').resolve(__dirname, dir)

const rewireAlias = (config, env) => {

  config.resolve.alias = Object.assign(config.resolve.alias, {
    '@': resolve('../src')
  })

  config.resolve.extensions.push('.less')

  return config
}

module.exports = rewireAlias;
