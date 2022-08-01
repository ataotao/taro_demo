import { Component, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import '@tarojs/async-await';
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
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  render() {
    return <PROVIDER store={store}>{this.props.children}</PROVIDER>;
  }
}

export default App;
