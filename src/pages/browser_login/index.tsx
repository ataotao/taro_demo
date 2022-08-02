
import Taro, { useDidShow, useReady, useRouter, useShareAppMessage } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConnectState } from '../../../types/connect';

import './index.less';

const Page = (props) => {
  // const { TEST } = useSelector((state: ConnectState) => state.sys);
  const dispatch = useDispatch();
  const [first, setfirst] = useState(0);

  const router = useRouter();

  console.log(router);
  
  /** 
   * 等同于页面的 onReady 生命周期钩子。
   * 从此生命周期开始可以使用 createCanvasContext 或 createSelectorQuery 等 API 访问小程序渲染层的 DOM 节点。
   */
  useReady(() => {
    // const query = Taro.createSelectorQuery();
    // 延迟一部分操作到下一个时间片再执行。（类似于 setTimeout）
    Taro.nextTick(() => {
      setfirst(1);
    });
    // console.log(first, query, TEST, dispatch);
    console.log(props);
    
  });

  /** 页面显示/切入前台时触发。等同于 onShow 页面生命周期钩子。 */
  useDidShow(() => {
    console.log('onShow');
  });

  /**
   * 监听用户点击页面内转发按钮（Button 组件 openType='share'）或右上角菜单“转发”按钮的行为，并自定义转发内容。等同于 onShareAppMessage 页面生命周期钩子。
   * 使用时，必须为页面配置 enableShareAppMessage: true。（修改配置文件后请重新编译项目）
   */
  useShareAppMessage(res => {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target);
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    };
  });
  
  return (
    <View className="browser_login-content">
      <Text>Page</Text>
    </View>
  );
};

export default Page;
