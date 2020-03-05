import ViolaSwitch from "./packages/switch/index";
import ViolaButton from "./packages/button/index";
import ViolaLayout from "./packages/layout/index";
import ViolaCell from "./packages/cell/index";

const components = [ViolaSwitch, ViolaButton, ViolaLayout, ViolaCell];
const install = function(Vue, options) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

/* 支持使用标签的方式引入 */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ViolaSwitch,
  ViolaButton,
  ViolaLayout,
  ViolaCell
};
