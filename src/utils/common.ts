// import Taro from '@tarojs/taro';

export const formatNumber = (n: number | string): string => {
  n = n.toString();
  return n[1] ? n : '0' + n;
};

export const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':');
};

// 格式化时间戳为日期
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


// 获取商户唯一字符串
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