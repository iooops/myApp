"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
require("./content.scss");
const taro_ui_1 = require("taro-ui");
const order_1 = require("../order/order");
class Content extends taro_1.Component {
    constructor() {
        super();
        this.state = {
            selected: 'order'
        };
        this.setTab = this.setTab.bind(this);
    }
    setTab(tab) {
        this.setState({ selected: tab });
    }
    render() {
        return (<components_1.View className="content">
        <components_1.View className="tabs">
          <components_1.View className="order" onClick={() => this.setTab('order')}>
            <taro_ui_1.AtIcon value='shopping-bag' size='14' color={this.state.selected === 'order' ? '#e63939' : '#555555'}></taro_ui_1.AtIcon>
            <components_1.Text className="tabText">下单</components_1.Text>
          </components_1.View>
          <components_1.View className="myOrders" onClick={() => this.setTab('myOrders')}>
            <taro_ui_1.AtIcon value='menu' size='14' color={this.state.selected === 'myOrders' ? '#e63939' : '#555555'}></taro_ui_1.AtIcon>
            <components_1.Text className="tabText">我的订单</components_1.Text>
          </components_1.View>
        </components_1.View>
        <components_1.View className="shop">
          <order_1.default />
        </components_1.View>
      </components_1.View>);
    }
}
exports.default = Content;
//# sourceMappingURL=content.jsx.map