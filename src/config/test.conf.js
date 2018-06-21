/**
 * 测试环境配置
 */

import baseConf from './base.conf'
import { defaultsDeep } from 'lodash'

const testConf = {
  api: {
    url: '', // 线下域名
  },
  url: {
    
  }
}

defaultsDeep(testConf, baseConf)

export default testConf
