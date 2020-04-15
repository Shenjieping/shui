/**
* @file index.js
* @author shenjp@founder.com
* @date 2020-04-14 13:28:59
*/
import Button from './src';
Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
