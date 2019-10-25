import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import './order.scss'
import { AtIcon, AtButton } from 'taro-ui'
import { menuList } from '../../../menuList'
import { addToCart, removeFromCart } from '../../../actions/cart'
import { connect } from '@tarojs/redux'

@connect(({ cart }) => ({
  cart
}), (dispatch) => ({
  addToCart (id) {
    dispatch(addToCart(id))
  },
  removeFromCart (id) {
    dispatch(removeFromCart(id))
  },
}))
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'order',
      selectedCatList: menuList[0]
    }
    this.setTab = this.setTab.bind(this);
    this.setCatList = this.setCatList.bind(this);
    this.getCount = this.getCount.bind(this);
    this.getSum = this.getSum.bind(this);
  }

  setTab(tab) {
    this.setState({ selected: tab });
  }

  setCatList(cat) {
    let catList = menuList.find(m => m.cat===cat);
    this.setState({ selectedCatList: catList });
  }

  getCount(id) {
    return this.props.cart.reduce((a, c)=> a+(c===id), 0);
  }

  getSum() {
    let { cart } = this.props;
    let priceList = {};
    for (let i = 0; i < menuList.length; i++) {
      for (let j = 0; j < menuList[i].items.length; j++) {
        
      }
    }
  }

  render () {
    const { selectedCatList } = this.state;
    const { cart } = this.props;

    return (
      <View className="order">
        <View className="menu">
          <View className="left">
            {
              menuList.map(m => 
                <View key={m.cat} className="cat" style={{borderLeft: '3PX solid '+ this.state.selectedCatList.cat===m.cat? '#e63939': '#555555'}}>
                  <Text className="menuText">{m.cat}</Text>
                </View>
              )
            }
          </View>
          <View className="right">
            {
              selectedCatList.items.map(it => 
                <View key={it.name} className="item">
                  <View className="itLeft">  
                    <Image className="img" src={it.img} />
                  </View>
                  <View className="itRight">
                    <Text className="name">{it.name}</Text>
                    <View className="pc">
                      <Text className="price">￥{it.price}</Text>
                      <View className="countContainer">
                        <View style={{visibility: this.getCount(it.id)===0? 'hidden': 'visible'}}>
                          <AtIcon className="icon" value='subtract-circle' size='12' color='#e63939'
                            onClick={()=>this.props.removeFromCart(it.id)}></AtIcon>
                        </View>
                        <View className="countWrapper" style={{visibility: this.getCount(it.id)===0? 'hidden': 'visible'}}>
                          <Text className="count">{this.getCount(it.id)}</Text>
                        </View>
                        <AtIcon className="icon" value='add-circle' size='12' color='#e63939'
                          onClick={()=>this.props.addToCart(it.id)}></AtIcon>
                      </View>
                    </View>
                  </View>
                </View>
              )
            }
          </View>
        </View>
        <View className="sum">
          <View className="sumLeft">
            <View className="countIcon">
              <AtIcon className="icon" value='shopping-bag' size='14' color='#FFF'></AtIcon>
              <View className="numItemsWrapper">
                <Text className="numItems">{cart.length}</Text>              
              </View>
            </View>
            <View className="priceSum">
              <Text className="sumText">合计：{this.getSum()}</Text>
              <Text className="totalText">￥</Text>
            </View>
          </View>
          <Button className="confirm">我选好了</Button>
        </View>
      </View>
    )
  }
}

export default Order;
