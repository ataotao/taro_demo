/* eslint-disable import/no-commonjs */
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
  mini: {},
  h5: {
    devServer: {
      proxy: {
        // 网关接口
        '/api/gateway': {
          target: 'https://dev-u.sosoqipei.com/api/gateway',
          secure: false,
          changeOrigin: true
        },
        '/c35ed1459efbbf3c/api': {
          target: 'https://dev-u.sosoqipei.com',
          changeOrigin: true
        },
        '/39842de2bfb5549b/api': {
          target: 'https://dev-u.sosoqipei.com',
          changeOrigin: true
        },
        '/522e564ab2d66d37/api': {
          target: 'https://u.sopei.cn',
          changeOrigin: true
        },
        '/c3bba9eba6baba3a/api': {
          target: 'https://release-u.sosoqipei.com',
          changeOrigin: true
        },
        '/d0bec8ad8832551c/api': {
          // 代理
          target: 'https://dev-u.sosoqipei.com',
          secure: false, //证书免校验
          changeOrigin: true
        },
        '/e400e097749f0120/api': {
          // 陶
          target: 'https://release-u.sosoqipei.com',
          secure: false, //证书免校验
          changeOrigin: true
        },

        '/919057cc9d0c6b81/api': {
          target: 'https://dev-u.sosoqipei.com',
          // target: 'https://u.sopei.cn',
          secure: false, //证书免校验
          changeOrigin: true
        },
        // '/919057cc9d0c6b81/api': {
        //   target: 'https://dev-u.sosoqipei.com',
        //   // target: 'https://u.sopei.cn',
        //   secure: false, //证书免校验
        //   changeOrigin: true,
        // },
        '/4c5ac52a8f740dc7/api': {
          target: 'https://dev-u.sosoqipei.com',
          secure: false, //证书免校验
          changeOrigin: true
        },
        '/070425fbecceb956/api': {
          target: 'https://release-u.sosoqipei.com',
          secure: false, //证书免校验
          changeOrigin: true
        },
        '/07132662dd855835/api': {
          target: 'https://dev-u.sosoqipei.com',
          secure: false, //证书免校验
          changeOrigin: true
        }
      }
    }
  }
};
