import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import Counter from './Counter'
import Profile from './Profile';
import TabBar from './TabBar';

import './index.scss'


@inject('TabBarStore')
@observer
class Index extends Component {
  
  config = {
    navigationBarTitleText: 'ARBook'
  }

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { TabBarStore: { currentTab } } = this.props;
    let content;
    switch (currentTab) {
      case 1: {
        content = <Profile />;

        break;
      }
    
      default: {
        content = <Counter />;

        break;
      }
    }

    return (
      <View className='index'>
        {content}
        <TabBar />
      </View>
    );
  }
}

export default Index
