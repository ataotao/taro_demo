import React, { FC, useCallback } from 'react';
import { View, Text, Button, Image } from '@tarojs/components';
import { useEnv, useNavigationBar, useModal, useToast } from 'taro-hooks';
import { useDispatch, useSelector } from 'react-redux';
import { ConnectState } from '../../types/connect';

import logo from './hook.png';

import './index.less';

interface IProps {

}

const Index: FC<IProps> = (props) => {
  const { TEST } = useSelector((state: ConnectState) => state.sys);
  const dispatch = useDispatch();
  const env = useEnv();
  const [_, { setTitle }] = useNavigationBar({ title: 'Taro Hooks' });
  const [show] = useModal({
    title: 'Taro Hooks!',
    showCancel: false,
    confirmColor: '#8c2de9',
    confirmText: '支持一下',
    mask: true
  });
  const [showToast] = useToast({ mask: true });
  
  console.log(TEST);
  
  const handleModal = useCallback(() => {
    dispatch({ type: 'sys/save', payload: 'TEST' });
    show({ content: '不如给一个star⭐️!' }).then(() => {
      showToast({ title: '点击了支持!' });
    });
  }, [show, showToast, dispatch]);

  return (
    <View className="wrapper">
      <Image className="logo" src={logo} />
      <Text className="title">为Taro而设计的Hooks Library</Text>
      <Text className="desc">
        目前覆盖70%官方API. 抹平部分API在H5端短板. 提供近40+Hooks!
        并结合ahook适配Taro!
      </Text>
      <View className="list">
        <Text className="label">运行环境</Text>
        <Text className="note">{env}</Text>
      </View>
      <Button className="button" onClick={() => setTitle('Taro Hooks Nice!')}>
        设置标题
      </Button>
      <Button className="button" onClick={handleModal}>
        使用Modal
      </Button>
    </View>
  );
};

export default Index;
