"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "Tab2",
  props: {
    typeid: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      name: "Tab2"
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.typeid + 1)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d0eeb82c"]]);
wx.createPage(MiniProgramPage);
