const publicPath = process.env.NODE_ENV === 'production' ? '/contexte/' : '/'

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: publicPath,
  transpileDependencies: true
})
