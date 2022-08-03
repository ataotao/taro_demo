/* eslint-disable import/no-commonjs */
const Taro = require('@tarojs/taro');
const COMMON = require('./common');

module.exports = {
  pages: ['pages/index/index', 'pages/browser_login/index'],
  
    /**
     * navigateTo 超过8次之后 强行进行redirectTo 否则会造成页面卡死
     * 调用方式 getApp().navigateTo({url: '/page/index/index'})
     */
    navigateTo(data) {
      return COMMON.debounce(debounceNavigateTo.call(this, data), 300);
    },
  
    navigateBack(data) {
      const options = formatPath(data);
      return Taro.navigateBack(options);
    },
  
    switchTab(data) {
      const route = routeInterceptor(data);
      if (!route) return;
      return Taro.switchTab(route);
    },
  
    reLaunch(data) {
      const options = formatPath(data);
      return Taro.reLaunch(options);
    },
  
    redirectTo(data) {
      const route = routeInterceptor(data);
      if (!route) return;
      return Taro.redirectTo(route);
    }
};


function formatPath(data) {
  const { url = '' } = data;
  let option = { ...data };
  if (process.env.TARO_ENV === 'h5') {
    // 补全url首字符为/
    const new_url = url[0] === '/' ? url : `/${url}`;
    option.url = `/$getTenSysFlag()/${new_url}`;
  }
}


// 处理访问权限keys
function isIncKeys(keys = [], url) {
  let flag = false;
  if (url.includes('pages/part/search') && !url.includes('queryType=CARMODEL_QUERY')) {
      // 编码查询和VIN查询，GUEST和NORMAL不可访问，未绑定只能访问车型查询
      return false;
  }
  for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (url.indexOf(key) === 0) {
          flag = true;
          break;
      }
  }
  return flag;
}

function debounceNavigateTo(data) {
  let route = routeInterceptor(data);
  if (!route) return;
  if (Taro.getCurrentPages().length > 8) {
    return Taro.redirectTo(route);
  }
  return Taro.navigateTo(route);
}

    // 路由拦截器
  function routeInterceptor(data) {
      const { url = '' } = data;
      const dvaApp = require('../dva');
      console.log(dvaApp.default.getState());
      const { user_type = '' } = dvaApp.default.getState().global.MINE;
      const binding = {
        url: '/pages/my/weapp-binding'
      };
  
      // 可访问页面配置
      const CONFIGS = {
        NORMAL_KEYS: ['/pages/index/index', '/pages/fail/index', 'pages/my/weapp-binding', '/pages/webview/webview', '/pages/captcha/captcha'],
        GUEST_KEYS: ['/pages/index/index', '/pages/fail/index', 'pages/my/weapp-binding', '/pages/webview/webview', '/pages/part/search', '/pages/part/list', '/pages/captcha/captcha']
      };
  
      /**
       * 微信登陆 有的页面没有初始化接口 静态处理是否弹出绑定手机
       * user_type类型
       * MEMBER 可以访问任何页面
       * GUEST: 游客可访问页面
       * NORMAL: 仅可访问首页
       */
      if (user_type === 'NORMAL' || user_type === 'GUEST') {
        const keys = CONFIGS[user_type + '_KEYS'];
        const inc = isIncKeys(keys, url);
        if (inc) {
          return formatPath(data);
        } else {
          // 本地存储跳转前url
          COMMON.setLocal('jumpUrl', url);
          // 绑定手机
          this.navigateTo(formatPath(binding));
        }
      } else {
        return formatPath(data);
      }
    }