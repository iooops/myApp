"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
require("./header.scss");
const taro_ui_1 = require("taro-ui");
const shop_jpg_1 = require("../../../media/shop.jpg");
class Header extends taro_1.Component {
    render() {
        return (<components_1.View className="header">
        <components_1.View className="left">
          <components_1.Text className="shopName">一杯咖啡一杯爱</components_1.Text>
          <components_1.View>
            <taro_ui_1.AtIcon value='map-pin' size='16' color='#FFF'></taro_ui_1.AtIcon>
            <components_1.Text className="address">上海市浦东新区博云路111号</components_1.Text>
          </components_1.View>
        </components_1.View>
        <components_1.View className="right">
          <components_1.Image className="img" src={shop_jpg_1.default}/>
        </components_1.View>
      </components_1.View>);
    }
}
exports.default = Header;
//# sourceMappingURL=header.jsx.map