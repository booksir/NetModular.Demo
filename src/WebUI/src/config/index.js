const isDev = process.env.NODE_ENV !== 'production'

const config = {
  baseUrl: 'https://api.demo.17mkh.com/api/'
}

// 开发模式
if (isDev) {
  config.baseUrl = 'http://localhost:6220/api/'
}
export default config
