import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
//引用taro中建立底部导航菜单控件
import { AtTabBar } from 'taro-ui'

//派生类
@inject('TabBarStore')
@observer
//设置通过索引显现的扩展组件
class Index extends Component {

  tabBarHandler = (i) => {
    const { TabBarStore: { navigateToTab } } = this.props;
//设置收到请求后跳转到相应索引的页面
    switch (i) {
      case 1:
        navigateToTab(i);
        break;
//未执行时跳转到索引为0的页面
      default:
        navigateToTab(0);
        break;
    }
  }
//写入渲染函数
  render() {
    const { TabBarStore: { currentTab } } = this.props;
//返回参数
    return (
      <View>
        <AtTabBar
          fixed
          tabList={[
            { title: 'Counter', iconType: 'add' },
            { title: 'Profile', iconType: 'user', text: 'new' },
          ]}
          onClick={this.tabBarHandler}
          current={currentTab}
        />
      </View>
    );
  }
}
//导出默认值
export default Index
