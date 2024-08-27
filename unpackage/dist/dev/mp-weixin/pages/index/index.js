"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      category: [],
      isActive: 0,
      scrollLeft: 0,
      fullHeight: "height: 100%;",
      list: []
    };
  },
  computed: {
    computedUrl() {
      const param = this.isActive + 1 === 1 ? "id1" : "id2";
      return `/pages/voice/index?${param}=${this.item.id}`;
    }
  },
  onLoad() {
    common_vendor.index.request({
      url: "http://localhost:8080/types",
      method: "GET",
      data: {
        type: 0
      },
      success: (result) => {
        if (result.data.code == 200) {
          this.category = result.data.data;
          this.chenked(0);
        }
      }
    });
  },
  methods: {
    chenked(index) {
      this.isActive = index;
      common_vendor.index.request({
        // url: this.$host + 'api/news',
        url: "http://localhost:8080/types",
        method: "GET",
        data: {
          type: this.isActive + 1
        },
        success: (result) => {
          if (result.data.code == 200) {
            this.list = result.data.data;
          }
        }
      });
      this.scrollLeft = index * (100 / this.category.length);
    },
    change(e) {
      this.isActive = e.detail.current;
    },
    onClick(e) {
      console.log(e);
    },
    navigateToDetail(id) {
      common_vendor.index.navigateTo({
        url: `/pages/voice/index?id=${id}`
        // 跳转到详情页，并传递 id 参数
      });
    },
    getDynamicUrl(id) {
      const param = this.isActive + 1 === 1 ? "gameId" : "playerId";
      return `/pages/voice/index?${param}=${id}`;
    }
  }
};
if (!Array) {
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  (_easycom_uni_grid_item2 + _easycom_uni_grid2)();
}
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
if (!Math) {
  (_easycom_uni_grid_item + _easycom_uni_grid)();
}
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
        a: common_vendor.f($data.list, (item2, index2, i1) => {
          return {
            a: item2.icon,
            b: common_vendor.t(item2.name),
            c: $options.getDynamicUrl(item2.id),
            d: index2,
            e: common_vendor.o(($event) => $options.navigateToDetail(item2.id), index2),
            f: "1cf27b2a-1-" + i0 + "-" + i1 + "," + ("1cf27b2a-0-" + i0),
            g: common_vendor.p({
              index: index2
            })
          };
        }),
        b: "1cf27b2a-0-" + i0,
        c: index
      };
    }),
    d: common_vendor.p({
      column: 3,
      highlight: true
    }),
    e: common_vendor.o((...args) => $options.change && $options.change(...args)),
    f: $data.isActive,
    g: common_vendor.s($data.fullHeight)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
