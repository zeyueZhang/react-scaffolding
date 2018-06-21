/**
 * 生产环境配置
 */

import baseConf from './base.conf'
import { defaultsDeep } from 'lodash'

const prodConf = {
  api: {
    url: '' //线上域名
  },
  url: {

  }
}

defaultsDeep(prodConf, baseConf)

export default prodConf
