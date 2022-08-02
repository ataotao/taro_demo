import Taro from '@tarojs/taro';
import qs from 'querystringify';
import { CODE_MESSAGE, HTTP_STATUS } from '../constants/status';
import { debounce, formatParams, getTenSysFlag, setLocal } from '../utils/common';
import { logError } from '../utils/error';
import * as services from './index';


/** 获取当前view */
const getView = () => {
  const pages = Taro.getCurrentPages().filter(page => Boolean(page));
  //获取当前页面的对象
  const view = pages[pages.length - 1];
  return view;
};

/** decode页面参数 */
const decodeQuerys = () => {
  //获取当前页面的对象
  const view = getView();
  const options = view.options;    //如果要获取url中所带的参数可以查看options
  // url参数处理
  const querys = decodeURIComponent(qs.stringify(options));
  return querys;
};

/** check登录状态 */
const checkLogin = debounce((res: any) => {
  const app = Taro.getApp();
  // 10003 未登录
  if (res.code === 10003) {
    const querys = decodeQuerys();
    const view = getView();
    const route = view.route;
    // 调用系统登录
    app.$app.loginWeappMember(() => {
      // 首页不reLaunch,避免闪屏
      if(route !== 'pages/index/index') {
        app.$app.reLaunch({
          url: '/' + route + '?' + querys
        });
      }
    });
  } else if (res.code === 10018 || res.code === 10019 || res.code === 10027) {
    // 10018 商户已被封停  10019 商户品牌已被封停 10027 你的访问权限被禁用，请联系管理员解禁
    // 跳转无法访问提示页面
    return Taro.redirectTo({
      url: '/pages/fail/index?type=visitfail' 
    });
  } else if (res.code === 20005) {
    // 未注册，跳转绑定页面
    const view = getView();
    const route = view.route;
    const querys = decodeQuerys();
    const url = '/' + route + '?' + querys;
    setLocal('jumpUrl', url);
    // 游客，跳转绑定页面
    Taro.redirectTo({ url: '/pages/my/weapp-binding' });
  }else if(res.code===10022){
    // 账号在另一台设备登录
    app.globalData.intercept = false;
    app.globalData.user_type='GUEST';
    app.globalData.preCode='10022';
    setTimeout(()=>{
      app.$app.reLaunch({ url: '/pages/index/index' });
    },1500);
  }
  return res;
}, 500);

export function baseOptions(params, method: Taro.request.Option['method'] = 'GET') {
  const { url, data } = params;
  const contentType = params.contentType || 'application/json';
  // h5和小程序分别处理baseUrl前缀
  let baseUrl = '';
  if (process.env.TARO_ENV === 'weapp') {
    const extConfig = Taro.getExtConfigSync? Taro.getExtConfigSync(): {};
    baseUrl = extConfig.domain + '/' + extConfig.system.ten_sys_flag + '/api/';
  } else if (process.env.TARO_ENV === 'h5') {
    baseUrl = getTenSysFlag() + '/api/';
  }
  const option: Taro.request.Option = {
    url: baseUrl + url,
    data: formatParams(data),
    method: method,
    header: {
      'content-type': contentType,
      // cookie: Taro.getStorageSync('cookies')
    },
    // mode: 'cors',
    // xhrFields: { withCredentials: true },
    success(result) {
      console.log('result', result);
      if (result.statusCode !== HTTP_STATUS.SUCCESS) {
        Taro.redirectTo({
          url: `/pages/fail/index?type=${result.statusCode}` 
        });
        const errortext = CODE_MESSAGE[result.statusCode] || result.errMsg;
        const error: any = new Error(errortext);
        error.code = -1;
        error.msg = errortext;
        error.name = result.statusCode;
        error.response = result;
        return error;
      } else {
        return (checkLogin as (res: any) => void)(result.data);
      }
    },
    fail(e) {
      logError('api', '请求接口出现问题', e);
      Taro.redirectTo({
        url: '/pages/fail/index?type=fail' 
      });
    }
  };
  return Taro.request(option);
}

export function get(url, data?: object) {
  const option = { url, data };
  return baseOptions(option);
}

export function post(url, data?: object, contentType?: string) {
  const params = { url, data, contentType };
  return baseOptions(params, 'POST');
}

export function fetch(option) {
  const params = { url: option.url, data: option.data, contentType: option.contentType };
  return baseOptions(params, option.method);
}

/**
 * 通用请求接口
 * @param fnName   services请求函数名
 * @param data     data参数
 */
export function request({ fnName, data = {} }) {
  return services[fnName](data);
}