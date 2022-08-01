import { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Text } from '@tarojs/components';
import { ConnectState } from 'src/types/connect';

type PageState = {};

type IProps = {
  sys: {
    TEST: string;
  };
};
class Nodes extends Component<IProps, PageState> {
  componentDidMount() {
    console.log(this.props);
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }



  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="list">
        <View>
          <Text>Hello, World</Text>
          <Button>点击</Button>
        </View>
      </View>
    );
  }
}


const mapStateToProps = (state: ConnectState) => ({
  sys: state.sys,
});
export default connect(mapStateToProps)(Nodes);
