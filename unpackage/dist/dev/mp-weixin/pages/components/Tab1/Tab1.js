"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "Tab1",
  props: {
    typeid: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      tabBars: [],
      dynamicList: [],
      list: []
    };
  },
  created() {
    console.log(this.typeid);
    this.list = [
      {
        id: 3,
        name: "CSGO",
        icon: "https://gullu-edu.oss-cn-hangzhou.aliyuncs.com/gameicon/CS2.jpg"
      },
      {
        id: 4,
        name: "LOL",
        icon: "https://gullu-edu.oss-cn-hangzhou.aliyuncs.com/gameicon/CS2.jpg"
      },
      {
        id: 5,
        name: "瓦罗兰特",
        icon: "https://gullu-edu.oss-cn-hangzhou.aliyuncs.com/gameicon/CS2.jpg"
      }
    ];
  },
  methods: {
    onClick(e) {
      console.log(e);
    },
    navigateToDetail(id) {
      common_vendor.index.navigateTo({
        url: `/pages/voice/index?id=${id}`
        // 跳转到详情页，并传递 id 参数
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  (_easycom_uni_grid_item2 + _easycom_uni_grid2)();
}
const _easycom_uni_grid_item = () => "../../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
if (!Math) {
  (_easycom_uni_grid_item + _easycom_uni_grid)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.icon,
        b: common_vendor.t(item.name),
        c: index,
        d: common_vendor.o(($event) => $options.navigateToDetail(item.id), index),
        e: "05808c08-1-" + i0 + ",05808c08-0",
        f: common_vendor.p({
          index
        })
      };
    }),
    b: common_vendor.p({
      column: 3,
      highlight: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
