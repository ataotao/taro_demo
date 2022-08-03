import { Component, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime';
import '@tarojs/async-await';
import Taro from '@tarojs/taro';
import { history } from '@tarojs/router';
import models from './models';
import dva from './dva';
import './app.less';
import msg from './utils/msg';
import { debounce, getTenSysFlag, isWechat, setLocal } from './utils/common';
// eslint-disable-next-line import/first
import 'windi.css';
import { navigateTo } from './utils/routes';

const PROVIDER = Provider as any;
/** 处理Taro.login 失败或异常code时，多调用一次 */
let wxLoginNum = 0;

interface IProps extends PropsWithChildren {}

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e, dispatch) {
    console.log(e);
  }
});
const store = dvaApp.getStore();

class App extends Component<IProps> {
  componentDidMount() {
    // 初始化品类数据
    dvaApp.dispatch({ type: 'global/fetchBrandCategories' });

    if (process.env.TARO_ENV === 'weapp') {
      const extConfig = Taro.getExtConfigSync ? Taro.getExtConfigSync() : {};
    } else if (process.env.TARO_ENV === 'h5') {
      console.log(process.env.TARO_ENV);
    }
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  taroGlobalData = {
    // app初始化状态
    isAppInit: false
  };

  appInit(pageInit) {
    const { isAppInit } = this.taroGlobalData;
    if (isAppInit) {
      pageInit();
    } else {
      // 重置app初始化标识
      this.taroGlobalData.isAppInit = true;
    }
  }

  // 系统登录
  loginWeappMember(callback) {
    if (process.env.TARO_ENV === 'weapp') {
      /**
       * 微信小程序
       */
      msg.loading();
      // 重置app初始化标识
      this.taroGlobalData.isAppInit = false;
      // 微信登录
      Taro.login({
        success: result => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          if (result.code) {
            // 微信登录成功调用系统登录
            // fetchLoginWeappMember({ code: result.code }).then(res => {
            //   if (res.code === 0) {
            //     this.appInit(callback);
            //   } else {
            //     Taro.redirectTo({
            //       url: '/pages/fail/index?type=tenant'
            //     });
            //   }
            //   msg.loaded();
            //   // 重置状态
            //   wxLoginNum = 0;
            // });
          } else {
            // 微信登录返回异常code, 重试一次
            this.retryLogin(callback);
          }
        },
        fail: err => {
          msg.loaded();
          // 微信登录失败，重试一次
          this.retryLogin(callback);
        }
      });
    } else if (process.env.TARO_ENV === 'h5') {
      /**
       * h5
       */
      if (isWechat()) {
        // 微信小程序访问
      } else {
        // 浏览器访问 登录页面

        // console.log(global.location);
        console.log(getTenSysFlag());

        navigateTo({
          url: '/pages/browser_login/index'
        });
      }
    }
  }

  /** 微信登录失败或者返回异常code，重新调用一次 */
  retryLogin(callback) {
    if (wxLoginNum === 0) {
      wxLoginNum++;
      this.loginWeappMember(callback);
    } else {
      Taro.redirectTo({
        url: '/pages/fail/index?type=tenant'
      });
    }
  }

  // 路由拦截器
  routeInterceptor(data) {
    const { url = '' } = data;
    const { user_type = '' } = dvaApp.getStore().global.MINE;
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
        return data;
      } else {
        // 本地存储跳转前url
        setLocal('jumpUrl', url);
        // 绑定手机
        this.navigateTo(binding);
      }
    } else {
      return data;
    }
  }

  /**
   * navigateTo 超过8次之后 强行进行redirectTo 否则会造成页面卡死
   * 调用方式 getApp().navigateTo({url: '/page/index/index'})
   */
  navigateTo(data) {}
  debounceNavigateTo(data) {
    let route = this.routeInterceptor(data);
    if (!route) return;
    if (Taro.getCurrentPages().length > 8) {
      return Taro.redirectTo(route);
    }
    return Taro.navigateTo(route);
  }

  navigateBack(data) {
    return Taro.navigateBack(data);
  }

  switchTab(data) {
    const route = this.routeInterceptor(data);
    if (!route) return;
    return Taro.switchTab(data);
  }

  reLaunch(data) {
    return Taro.reLaunch(data);
  }

  redirectTo(data) {
    const route = this.routeInterceptor(data);
    if (!route) return;
    return Taro.redirectTo(data);
  }

  render() {
    return <PROVIDER store={store}>{this.props.children}</PROVIDER>;
  }
}

export default App;


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