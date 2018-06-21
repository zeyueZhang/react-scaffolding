/**
 * 通用配置
 */

const statusCode = {
  // 成功
  success: 200
}

module.exports = {
  // api 配置
  api: {
    // 网络请求超时时间
    timeout: 6000,
    // 状态吗定义
    code: statusCode,
    vm: '',
    // 不以 toast 提示的状态码列表
    excludedTipCode: [

    ],
    tip: {
      unknown: '未知错误',
      serverError: '服务器繁忙，请稍后再试',
    }
  },
  url: {
    assets: {
      
    }
  },
  // 重新发送验证码间隔时间（s）
  resendVcodeInterval: 60,
  // 弹出层显示时间（ms）
  popupDuration: {
    common: 2000
  },
  // 运行环境
  runTimeEnv: {
    app: '1'
  },
}