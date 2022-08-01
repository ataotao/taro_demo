import { Component, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime';
import '@tarojs/async-await';
import Taro from '@tarojs/taro';
import models from './models';
import dva from './dva';
import './app.less';

const PROVIDER = Provider as any;

interface IProps extends PropsWithChildren {}

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e, dispatch) {
    dispatch({ type: 'sys/save', payload: e });
  }
});
const store = dvaApp.getStore();

class App extends Component<IProps> {
  componentDidMount() {
    // dvaApp.dispatch({ type: 'sys/error', payload: 'test' });

    if (process.env.TARO_ENV === 'weapp') {
      const extConfig = Taro.getExtConfigSync? Taro.getExtConfigSync(): {};
      console.log(extConfig);
    } else if (process.env.TARO_ENV === 'h5') {
      console.log(process.env.TARO_ENV);
      
    }
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  render() {
    return <PROVIDER store={store}>{this.props.children}</PROVIDER>;
  }
}

export default App;
