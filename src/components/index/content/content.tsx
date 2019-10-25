import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import './content.scss'
import { AtIcon } from 'taro-ui'
import Order from '../order/order'

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'order'
    }
    this.setTab = this.setTab.bind(this);
  }

  setTab(tab) {
    this.setState({ selected: tab });
  }

  render () {
    return (
      <View className="content">
        <View className="tabs">
          <View className="order" onClick={()=>this.setTab('order')}>
            <AtIcon className="icon" value='shopping-bag' size='14' color={this.state.selected==='order'? '#e63939': '#555555'}></AtIcon>
            <Text className="tabText">下单</Text>
          </View>
          <View className="myOrders" onClick={()=>this.setTab('myOrders')}>
            <AtIcon className="icon" value='menu' size='14' color={this.state.selected==='myOrders'? '#e63939': '#555555'}></AtIcon>
            <Text className="tabText">我的订单</Text>
          </View>
        </View>
        <View className="shop">
          <Order />
        </View>
      </View>
    )
  }
}
