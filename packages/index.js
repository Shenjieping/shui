/**
* @file index.js
* @author shenjp@founder.com
* @date 2020-04-14 13:31:24
*/
import ShButton from './button';

const components = [
  ShButton
];

const install = function (Vue) {
  if (install.installed) return;
  components.map(component => {
    return Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  ShButton
};
