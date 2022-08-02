import Taro from '@tarojs/taro';
import msg from './msg';

// 验证FormData格式
export function isFormData(v: any) {
  return Object.prototype.toString.call(v) === '[object FormData]';
}

// 验证Date格式
export function isDate(v: any) {
  return Object.prototype.toString.call(v) === '[object Date]';
}

/** 格式化数字为字符串 */
export const formatNumber = (n: number | string): string => {
  n = n.toString();
  return n[1] ? n : '0' + n;
};

/** 格式化时间 */
export const formatTime = date => {
  if(!isDate(date)) return console.error('请录入正确的时间格式');
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':');
};

/** 格式化时间戳为日期 */
export const formatTimeStampToTime = timestamp => {
  const date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  // const hour = date.getHours() + ':';
  // const minutes = date.getMinutes() + ':';
  // const second = date.getSeconds();
  return `${year}-${month}-${day}`;
};


/** 获取商户唯一字符串 */
export const getTenSysFlag = () => {
  // 用户标识字符串
  const hash = window.location.hash;
  const regExp = /#\/([a-zA-Z\d]{16})/;
  const isMatch = hash.match(regExp);
  let key = '';
  if (isMatch) {
    key = isMatch[1];
  }
  return key;
};

/** 格式化请求参数 */
export function formatParams(params) {
  if (isFormData(params)) {
    return params;
  } else {
    let _params = {};
    for (const key in params) {
      const val = params[key];
      if (val !== undefined) {
        _params[key] = val;
      }
    }
    return _params;
  }
}

/*函数节流*/
export function throttle(fn: any, interval: number) {
  let enterTime = 0;//触发的时间
  const gapTime = interval || 300;//间隔时间，如果interval不传，则默认300ms
  return function () {
    const context = this;
    const backTime = new Date().getTime();//第一次函数return即触发的时间
    if (backTime - enterTime > gapTime) {
      fn.call(context, ...arguments);
      enterTime = backTime;//赋值给第一次触发的时间，这样就保存了第二次触发的时间
    }
  };
}

/*函数防抖*/
export function debounce(fn: any, interval: number) {
  let timer;
  const gapTime = interval || 1000;//间隔时间，如果interval不传，则默认1000ms
  return function () {
    clearTimeout(timer);
    const context = this;
    const args = arguments;//保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
    timer = setTimeout(function () {
      fn.call(context, ...args);
    }, gapTime);
  };
}

// 本地存储
export function getLocal(key) {
  try {
    const value = Taro.getStorageSync(key);
    return value;
  } catch (e) {
    return null;
  }
}

export function setLocal(key, value) {
  try {
    Taro.setStorageSync(key, value);
  } catch (e) {
    msg.fail('存储数据失败');
  }
}

export function removeLocal(key) {
  try {
    Taro.removeStorageSync(key);
  } catch (e) {
    msg.fail('移除存储数据失败');
  }
}

// 生成一个随机数字时间戳
export function randomTimestamp() {
  return Math.ceil(Math.random() * new Date().getTime()) + '';
}


// 全数字效验
export function verifyAllnumber(str) {
  return Boolean(str && /^[0-9]*$/.test(str));
}

// 验证是否微信访问
export function isWechat() {
  const ua = window.navigator.userAgent.toLowerCase();
  return Boolean(ua.match(/MicroMessenger/i));
};