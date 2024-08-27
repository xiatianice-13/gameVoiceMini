<template>
  <view class="container">
    <!-- 选项卡水平方向滑动 -->
    <view class="nav">
      <!-- 选项卡水平方向滑动，scroll-with-animation是滑动到下一个选项时，有一个延时效果 -->
      <scroll-view class="tab-scroll" scroll-x="true" scroll-with-animation :scroll-left="scrollLeft">
        <view class="tab-scroll_box">
          <!-- 选项卡类别列表 -->
          <view 
            class="tab-scroll_item" 
            v-for="(item, index) in category" 
            :key="index"  
            :class="{'active': isActive === index}" 
            @click="chenked(index)">
            {{ item.name }}
          </view>
        </view>
      </scroll-view>
    </view>

    <!-- 选项卡内容轮播滑动显示 -->
    <swiper @change="change" :current="isActive" class="swiper-content" :style="fullHeight">
      <!-- 动态生成swiper-item -->
      <swiper-item v-for="(item, index) in category" :key="index" class="swiperitem-content">
        <scroll-view scroll-y style="height: 100%;">
          <view class="nav_item">
            选项卡 {{ index + 1 }} 页面
          </view>
        </scroll-view>    
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  data() {
    return {
      category: [
        { name: '选项卡1' },
        { name: '选项卡2' },
        { name: '选项卡3' },
        { name: '选项卡4' },
        { name: '选项卡5' },
        { name: '选项卡6' }
      ],
      isActive: 0,
      scrollLeft: 0,
      fullHeight: 'height: 100%;'
    };
  },
  methods: {
    chenked(index) {
      this.isActive = index;
      // 更新 scrollLeft 以滚动到选中的 tab
      this.scrollLeft = index * (100 / this.category.length); // 根据选项卡数量调整滚动距离
    },
    change(e) {
      this.isActive = e.detail.current;
    }
  }
};
</script>

<style scoped>
/* Your styles here */
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.nav {
  display: flex;
  flex-direction: column;
}

.tab-scroll {
  overflow-x: auto;
}

.tab-scroll_box {
  display: flex;
  flex-direction: row;
}

.tab-scroll_item {
  flex: 1;
  text-align: center;
  padding: 10px;
  cursor: pointer;
}

.tab-scroll_item.active {
  color: #007aff;
  font-weight: bold;
}

.swiper-content {
  flex: 1;
}

.swiperitem-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav_item {
  padding: 20px;
}
</style>
