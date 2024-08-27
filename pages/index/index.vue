<template>
	<view class="container">
		<!-- 选项卡水平方向滑动 -->
		<view class="nav">
			<!-- 选项卡水平方向滑动，scroll-with-animation是滑动到下一个选项时，有一个延时效果 -->
			<scroll-view class="tab-scroll" scroll-x="true" scroll-with-animation :scroll-left="scrollLeft">
				<view class="tab-scroll_box">
					<!-- 选项卡类别列表 -->
					<view class="tab-scroll_item" v-for="(item, index) in category" :key="index"
						:class="{'active': isActive === index}" @click="chenked(index)">
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
						<uni-grid :column="3" :highlight="true">
							<uni-grid-item v-for="(item, index) in list" :index="index" :key="index"
								@click="navigateToDetail(item.id)">
								<view>
									<navigator :url="getDynamicUrl(item.id)" hover-class="navigator-hover"
										class="grid-item-box">
										<image :src="item.icon" class="image" mode="aspectFill" />
										<text type="default">{{item.name}}</text>
									</navigator>
								</view>
							</uni-grid-item>
						</uni-grid>
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
				category: [],
				isActive: 0,
				scrollLeft: 0,
				fullHeight: 'height: 100%;',
				list: []
			};
		},
		computed: {
			computedUrl() {
				const param = this.isActive + 1 === 1 ? 'id1' : 'id2';
				return `/pages/voice/index?${param}=${this.item.id}`;
			}
		},
		onLoad() {
			uni.request({
				url: 'http://localhost:8080/types',
				method: 'GET',
				data: {
					type: 0
				},
				success: (result) => {
					if (result.data.code == 200) {
						this.category = result.data.data;
						this.chenked(0)
					}
				}
			})
			// this.category = [{
			// 		id: 1,
			// 		name: '游戏分类'
			// 	},
			// 	{
			// 		id: 2,
			// 		name: '主播分类'
			// 	},
			// ];
		},
		methods: {
			chenked(index) {
				this.isActive = index;
				uni.request({
					// url: this.$host + 'api/news',
					url: 'http://localhost:8080/types',
					method: 'GET',
					data: {
						type: this.isActive + 1
					},
					success: (result) => {
						if (result.data.code == 200) {
							this.list = result.data.data;
						}
					}
				})
				// 更新 scrollLeft 以滚动到选中的 tab
				this.scrollLeft = index * (100 / this.category.length); // 根据选项卡数量调整滚动距离
			},
			change(e) {
				this.isActive = e.detail.current;
			},
			onClick(e) {
				console.log(e)
			},
			navigateToDetail(id) {
				uni.navigateTo({
					url: `/pages/voice/index?id=${id}` // 跳转到详情页，并传递 id 参数
				});
			},
			getDynamicUrl(id) {
				const param = this.isActive + 1 === 1 ? 'gameId' : 'playerId';
				return `/pages/voice/index?${param}=${id}`;
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

	.container {
		overflow: hidden;
	}

	.custom-cover {
		flex: 1;
		flex-direction: row;
		position: relative;
	}

	.cover-content {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 40px;
		background-color: rgba($color: #000000, $alpha: 0.4);
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 15px;
		font-size: 14px;
		color: #fff;
	}

	.card-actions {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		height: 45px;
		border-top: 1px #eee solid;
	}

	.card-actions-item {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.card-actions-item-text {
		font-size: 12px;
		color: #666;
		margin-left: 5px;
	}

	.cover-image {
		flex: 1;
		height: 150px;
	}

	.no-border {
		border-width: 0;
	}

	.image {
		width: 80px;
		height: 80px;
	}

	.text {
		font-size: 14px;
		margin-top: 5px;
	}

	.grid-dynamic-box {
		margin-bottom: 15px;
	}

	.grid-item-box {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10px 0;
	}

	.grid-item-box-row {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}

	.grid-dot {
		position: absolute;
		top: 5px;
		right: 15px;
	}

	.swiper {
		height: 420px;
	}

	/* #ifdef H5 */
	@media screen and (min-width: 768px) and (max-width: 1425px) {
		.swiper {
			height: 630px;
		}
	}

	@media screen and (min-width: 1425px) {
		.swiper {
			height: 830px;
		}
	}

	/* #endif */
</style>