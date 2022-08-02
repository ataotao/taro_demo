import Taro from '@tarojs/taro';
import ERR_CODE from './err_code';

const icon_fail = '/assets/img/fail.png';
function getMsg(code = '') {
  return typeof code === 'number' ? ERR_CODE[code] : code;
}

function getCode(code) {
  const exclude = [-1, 4001, 4002, 4003, 4004, 20005, 10003];
  return code && !exclude.includes(code);
}

/**
 * 提示与加载工具类
 */
export default class Msg {
  static isLoading = false;

  /**
   * 信息提示 无图标
   */
  static toast(title, duration = 2000, onHide) {
    if (getCode(title)) {
      Taro.showToast({
        title: getMsg(title),
        icon: 'none',
        mask: true,
        duration
      });
      // 隐藏结束回调
      if (onHide) {
        let timer = setTimeout(() => {
          onHide();
          clearTimeout(timer);
        }, 500);
      }
    }else{
      Taro.hideLoading();
    }
  }

  /**
   * 错误提示
   */
  static fail(title, onHide?: () => void) {
    if (getCode(title)) {
      Taro.showToast({
        title: getMsg(title),
        image: icon_fail,
        mask: true,
        duration: 2000,
      });
      // 隐藏结束回调
      if (onHide) {
        setTimeout(() => {
          onHide();
        }, 500);
      }
    }else{
      Taro.hideLoading();
    }
  }

  /**
   * 弹出提示框
   */
  static success(title, duration = 2000) {
    Taro.showToast({
      title: title,
      icon: 'success',
      mask: true,
      duration: duration,
    });
    if (duration > 0) {
      return new Promise(resolve => {
        let timer = setTimeout(resolve, duration);
        clearTimeout(timer);
      });
    }
  }

  /**
   * 弹出加载提示
   */
  static loading(title = '加载中', force = false) {
    if (this.isLoading && !force) {
      return;
    }
    this.isLoading = true;
    if (Taro.showLoading) {
      Taro.showLoading({
        title: title,
        mask: true,
      });
    } else {
      Taro.showNavigationBarLoading();
    }
  }

  /**
   * 加载完毕
   */
  static loaded() {
    let duration = 0;
    if (this.isLoading) {
      this.isLoading = false;
      if (Taro.hideLoading) {
        Taro.hideLoading();
      } else {
        Taro.hideNavigationBarLoading();
      }
      // 延迟隐藏，修复微信版本7.0.10生命周期onload里面调用wx.hideLoading失效的bug(官方已全量修复)
      // let t = setTimeout(() => {
      //   wx.hideLoading();
      //   clearTimeout(t);
      // }, 500);
      duration = 500;
    }
    // 隐藏动画大约500ms，避免后面直接toast时的显示bug
    return new Promise(resolve => {
      const timer = setTimeout(resolve, duration);
      clearTimeout(timer);
    });
  }

}
