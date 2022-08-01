import Taro from '@tarojs/taro';
import { getTenSysFlag } from '../utils/common';
import { HTTP_STATUS } from '../constants/status';
import { logError } from '../utils/error';

export default {
  baseOptions(params, method = 'GET') {
    let { url, data } = params;
    let contentType = 'application/json';
    contentType = params.contentType || contentType;
    type OptionType = {
      url: string;
      data?: object | string;
      method?: any;
      header: object;
      mode: Taro.request.Option['mode'],
      success: any;
      error: any;
      xhrFields: object;
    };
    let baseUrl = '';
    if (process.env.TARO_ENV === 'weapp') {
      const extConfig = Taro.getExtConfigSync? Taro.getExtConfigSync(): {};
      baseUrl = extConfig.domain + '/' + extConfig.system.ten_sys_flag + '/api/';
    } else if (process.env.TARO_ENV === 'h5') {
      baseUrl = getTenSysFlag() + '/api/';
    }
    const option: OptionType = {
      url: baseUrl + url,
      data: data,
      method: method,
      header: {
        'content-type': contentType,
        // cookie: Taro.getStorageSync('cookies')
      },
      mode: 'cors',
      xhrFields: { withCredentials: true },
      success(res) {
        console.log('res', res);
        if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
          return logError('api', '请求资源不存在');
        } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
          return logError('api', '服务端出现了问题');
        } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
          return logError('api', '没有权限访问');
        } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
          Taro.clearStorage();
          Taro.navigateTo({
            url: '/pages/login/index'
          });
          return logError('api', '请先登录');
        } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
          return res.data;
        }
      },
      error(e) {
        logError('api', '请求接口出现问题', e);
      }
    };
    return Taro.request(option);
  },
  get(url, data?: object) {
    let option = { url, data };
    return this.baseOptions(option);
  },
  post: function(url, data?: object, contentType?: string) {
    let params = { url, data, contentType };
    return this.baseOptions(params, 'POST');
  },
  put(url, data?: object) {
    let option = { url, data };
    return this.baseOptions(option, 'PUT');
  },
  delete(url, data?: object) {
    let option = { url, data };
    return this.baseOptions(option, 'DELETE');
  }
};
