import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import './order.scss'
import { AtIcon, AtButton } from 'taro-ui'
import { menuList } from '../../../menuList'
import { addToCart, removeFromCart } from '../../../actions/cart'
import { add, minus, asyncAdd } from '../../../actions/counter'
import { connect } from '@tarojs/redux'
import store from '../../../store'

// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   addToCart (id) {
//     dispatch(addToCart(id))
//   },
//   removeFromCart (id) {
//     dispatch(removeFromCart(id))
//   },
// }))
class Order extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'order',
      selectedCatList: menuList[0]
    }
    this.setTab = this.setTab.bind(this);
    this.setCatList = this.setCatList.bind(this);
  }

  componentWillMount () {
    // console.log(this.$router.params)
  }

  componentDidMount () {
    console.log(this.props)
    console.log(store().getState())
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props)
    console.log(nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  setTab(tab) {
    this.setState({ selected: tab });
  }

  setCatList(cat) {
    let catList = menuList.find(m => m.cat===cat);
    this.setState({ selectedCatList: catList });
  }

  render () {
    const { selectedCatList } = this.state;

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
                        <AtIcon className="icon" value='subtract-circle' size='12' color='#555555'></AtIcon>
                        <Text className="count">0</Text>
                        <AtIcon className="icon" value='add-circle' size='12' color='#555555'></AtIcon>
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
            </View>
            <View className="priceSum">
              <Text className="sumText">合计：</Text>
              <Text className="totalText">￥</Text>
            </View>
          </View>
          <Button className="confirm">我选好了</Button>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  addToCart: (id) => dispatch(addToCart(id)), 
  removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Order);
