const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  },
  lintOnSave: false,
  devServer:{
    proxy:{
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewite:{
          '^/api':''
        }
      }
    }
  },
})
