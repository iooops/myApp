"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
require("./order.scss");
const menuList_1 = require("../../../menuList");
class Order extends taro_1.Component {
    constructor() {
        super();
        this.state = {
            selected: 'order',
            selectedCat: menuList_1.menuList[0].cat
        };
        this.setTab = this.setTab.bind(this);
        this.setCat = this.setCat.bind(this);
    }
    componentWillMount() {
        // console.log(this.$router.params)
    }
    componentDidMount() {
        console.log(this.props);
    }
    componentWillReceiveProps(nextProps) {
        console.log(this.props);
        console.log(nextProps);
    }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    setTab(tab) {
        this.setState({ selected: tab });
    }
    setCat(cat) {
        this.setState({ selectedCat: cat });
    }
    render() {
        return (<components_1.View className="order">
        <components_1.View className="menu">
          <components_1.View className="left">
            {menuList_1.menuList.map(m => <components_1.View key={m.cat} className="cat" style={{ borderLeft: '3PX solid ' + this.state.selectedCat === m.cat ? '#e63939' : '' }}>
                  <components_1.Text className="menuText">{m.cat}</components_1.Text>
                </components_1.View>)}
          </components_1.View>
          <components_1.View className="right">
            
          </components_1.View>
        </components_1.View>
        <components_1.View className="sum">
        </components_1.View>
      </components_1.View>);
    }
}
exports.default = Order;
//# sourceMappingURL=order.jsx.map