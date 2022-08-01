import { resolve } from 'path';

const config = {
  projectName: 'myApp',
  date: '2022-7-27',
  // 设计稿尺寸
  designWidth: 750,
  // 设计稿尺寸换算规则
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  // 项目源码目录
  sourceRoot: 'src',
  // 项目编译目录
  outputRoot: `dist/${process.env.TARO_ENV}`,
  // Taro 插件配置
  plugins: [],
  // 全局常量设置
  defineConstants: {},
  // 文件 copy 配置
  copy: {
    patterns: [
      { from: 'ext.json', to: `dist/${process.env.TARO_ENV}/ext.json`}, // 指定需要 copy 的目录
    ],
    options: {}
  },
  // 框架，react，nerv，vue, vue3 等
  framework: 'react',
  alias: {
    '@/components': resolve(__dirname, '..', 'src/components'),
    '@/utils': resolve(__dirname, '..', 'src/utils'),
    '@/service': resolve(__dirname, '..', 'src/service'),
    // async-await导入时需要引入regenerator-runtime/runtime，但是 import 'regenerator-runtime/runtime'会报错，增加一个alias处理
    'regenerator-runtime': resolve(__dirname, '../node_modules', 'regenerator-runtime'),
  },
  
  compiler: 'webpack5',
  cache: {
    enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  // 小程序端专用配置
  mini: {
    optimizeMainPackage: {
      enable: true
    },

    postcss: {
      autoprefixer: {
        enable: true
      },
      // pxtransform 默认配置会对所有的 px 单位进行转换，有大写字母的 Px 或 PX 则会被忽略。
      pxtransform: {
        enable: true,
        config: {}
      },
      // 小程序端样式引用本地资源内联配置
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  // H5 端专用配置
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
};

export default function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};