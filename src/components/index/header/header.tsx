import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './header.scss'
import { AtIcon } from 'taro-ui'
import shopImg from '../../../media/shop.jpg'

export default class Header extends Component {
  render () {
    return (
      <View className="header">
        <View className="left">
          <Text className="shopName">一杯咖啡一杯爱</Text>
          <View>
            <AtIcon value='map-pin' size='16' color='#FFF'></AtIcon>
            <Text className="address">上海市浦东新区博云路111号</Text>
          </View>
        </View>
        <View className="right">
          <Image className="img" src={shopImg} />
        </View>
      </View>
    )
  }
}
