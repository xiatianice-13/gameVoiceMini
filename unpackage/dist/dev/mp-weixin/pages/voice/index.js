"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      nvueWidth: 730,
      voiceList: [
        {
          id: 1,
          name: "茄子",
          url: "https://gullu-edu.oss-cn-hangzhou.aliyuncs.com/qz-qnl.mp3",
          remark: "求你了"
        },
        {
          id: 1,
          name: "茄子",
          url: "https://gullu-edu.oss-cn-hangzhou.aliyuncs.com/qz-qnl.mp3",
          remark: "求你了"
        },
        {
          id: 1,
          name: "茄子",
          url: "https://gullu-edu.oss-cn-hangzhou.aliyuncs.com/qz-qnl.mp3",
          remark: "求你了"
        },
        {
          id: 1,
          name: "茄子",
          url: "https://gullu-edu.oss-cn-hangzhou.aliyuncs.com/qz-qnl.mp3",
          remark: "求你了"
        }
      ]
    };
  },
  onLoad(query) {
    if (query.gameId) {
      console.log(query.gameId);
    }
    if (query.playerId) {
      console.log(query.playerId);
    }
  },
  methods: {
    chunkArray(array, size) {
      const result = [];
      for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
      }
      return result;
    },
    playAudio(url) {
      const audioSrc = url;
      const audioContext = common_vendor.wx$1.createInnerAudioContext();
      audioContext.src = audioSrc;
      audioContext.onPlay(() => {
        console.log("音频开始播放");
      });
      audioContext.onError((res) => {
        console.log("音频播放错误", res);
      });
      audioContext.play();
    }
  }
};
if (!Array) {
  const _easycom_uni_col2 = common_vendor.resolveComponent("uni-col");
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  (_easycom_uni_col2 + _easycom_uni_row2)();
}
const _easycom_uni_col = () => "../../uni_modules/uni-row/components/uni-col/uni-col.js";
const _easycom_uni_row = () => "../../uni_modules/uni-row/components/uni-row/uni-row.js";
if (!Math) {
  (_easycom_uni_col + _easycom_uni_row)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.voiceList, (voice, index, i0) => {
      return {
        a: common_vendor.t(voice.name + "--" + voice.remark),
        b: voice.id,
        c: common_vendor.o(($event) => $options.playAudio(voice.url), voice.id),
        d: index,
        e: "df134ada-1-" + i0 + ",df134ada-0"
      };
    }),
    b: common_vendor.p({
      span: 12
    }),
    c: common_vendor.p({
      width: $data.nvueWidth
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
