import Taro from '@tarojs/taro'
//引入试图组件
import { View } from '@tarojs/components'
//引入 选项卡 分散页 按钮
import { AtTabs, AtTabsPane, AtButton } from 'taro-ui'


class Index extends Taro.Component {
//页面显示名称为发现页
  config = {
    navigationBarTitleText: '发现页'
  }
//页面中表头状态及选项卡状态设置
  tabHandler = (value) => {
    this.setState({
      currentTab: value
    })
  }
//定义返回函数
  backButtonHandler = () => {
    Taro.navigateBack()
  }
//定义三个选项卡函数
  render() {
    const { currentTab } = this.state;
    const tabList = [
      { title: '标签页1' },
      { title: '标签页2' },
      { title: '标签页3' },
    ]

    return (//页面布局
      <View>
        <AtTabs
          current={currentTab}
          tabList={tabList}
          onClick={this.tabHandler}
        >
          <AtTabsPane current={currentTab} index={0} >
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>
			//返回主页按钮设置，调用backButtonHandler返回函数
              <AtButton type='secondary' onClick={this.backButtonHandler}>
                回到 TabBar 页并关闭本页
              </AtButton>
            </View>
          </AtTabsPane>
          <AtTabsPane current={currentTab} index={1}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>
              标签页二的内容
            </View>
          </AtTabsPane>
          <AtTabsPane current={currentTab} index={2}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>
              标签页三的内容
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
//输出默认的值
export default Index
