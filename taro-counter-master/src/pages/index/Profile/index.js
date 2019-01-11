import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
//引用通告栏 按钮 控件
import { AtNoticebar, AtButton } from 'taro-ui'

import './index.scss'


class Index extends Component {
//设置收到指令后跳转到的发现页
  discoveryBtnHandler = () => {
    Taro.navigateTo({
      url: '/pages/discovery/index'
    })
  }
//收到请求后跳到返回的页面
  requestBtnHandler = () => {
    Taro.request({
      url: 'http://localhost:8001/api/users/',
      method: 'GET',
    }).then(res => console.log(res.data))
  }

  render() {
	  //返回参数
    return (
      <View className='profile'>
        <AtNoticebar>个人主页上线了！赶紧体验看看吧</AtNoticebar>
        <View className='doc-body'>
          <View className='profile-btn'>
		  //设置命令按钮及记录点击事件的发生
            <AtButton type='primary' onClick={this.discoveryBtnHandler}>
              去看看发现页
            </AtButton>
          </View>
          <View className='profile-btn'>
		  //设置命令按钮及记录点击事件的发生
            <AtButton type='secondary' onClick={this.requestBtnHandler}>
              发个网络请求
            </AtButton>
          </View>
        </View>
      </View>
    )
  }
}
//返回默认参数
export default Index
