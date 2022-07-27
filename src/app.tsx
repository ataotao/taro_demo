import React, { Component } from 'react';
import { Provider } from 'react-redux';
import '@tarojs/async-await';
import models from './models';
import dva from './dva';
import './app.less';

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e, dispatch) {
    dispatch({ type: 'sys/save', payload: e });
  }
});
const store = dvaApp.getStore();

class App extends Component {
  componentDidMount() {
    // dvaApp.dispatch({ type: 'sys/error', payload: 'test' });
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
