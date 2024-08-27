"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      category: [
        { name: "选项卡1" },
        { name: "选项卡2" },
        { name: "选项卡3" },
        { name: "选项卡4" },
        { name: "选项卡5" },
        { name: "选项卡6" }
      ],
      isActive: 0,
      scrollLeft: 0,
      fullHeight: "height: 100%;"
    };
  },
  methods: {
    chenked(index) {
      this.isActive = index;
      this.scrollLeft = index * (100 / this.category.length);
    },
    change(e) {
      this.isActive = e.detail.current;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.category, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index,
        c: $data.isActive === index ? 1 : "",
        d: common_vendor.o(($event) => $options.chenked(index), index)
      };
    }),
    b: $data.scrollLeft,
    c: common_vendor.f($data.category, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: index
      };
    }),
    d: common_vendor.o((...args) => $options.change && $options.change(...args)),
    e: $data.isActive,
    f: common_vendor.s($data.fullHeight)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9ab85748"]]);
wx.createPage(MiniProgramPage);
