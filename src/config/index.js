/**
 * 导出配置
 */

const env = process.env.NODE_ENV
const appEnv = process.env.REACT_APP_ENV

if (env === 'development') {
  module.exports = require('./dev.conf')
} else if (appEnv === 'production.test') {
  module.exports = require('./test.conf')
} else {
  module.exports = require('./prod.conf')
}
