<template>
	<view>
		<swiper class="swiper" :indicator-dots="true">
			<!-- <swiper-item v-for="tabBars.length / 9" :index="index" :key="index"> -->
			<swiper-item>
				<uni-grid :column="3" :highlight="true">
					<uni-grid-item v-for="(item, index) in list" :index="index" :key="index"
						@click="navigateToDetail(item.id)">
						<view class="grid-item-box">
							<image :src="item.icon" class="image" mode="aspectFill" />
							<navigator url="/pages/game/index" hover-class="navigator-hover">
								<text type="default">{{item.name}}</text>
							</navigator>
						</view>
					</uni-grid-item>
				</uni-grid>

			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name: 'Tab1',
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
			this.list = [{
					id: 3,
					name: 'CSGO',
					icon: 'https://gullu-edu.oss-cn-hangzhou.aliyuncs.com/gameicon/CS2.jpg'
				},
				{
					id: 4,
					name: 'LOL',
					icon: 'https://gullu-edu.oss-cn-hangzhou.aliyuncs.com/gameicon/CS2.jpg'
				},
				{
					id: 5,
					name: '瓦罗兰特',
					icon: 'https://gullu-edu.oss-cn-hangzhou.aliyuncs.com/gameicon/CS2.jpg'
				},
			]
		},
		methods: {
			onClick(e) {
				console.log(e)
			},
			navigateToDetail(id) {
				uni.navigateTo({
					url: `/pages/voice/index?id=${id}` // 跳转到详情页，并传递 id 参数
				});
			},
		},
	};
</script>

<style lang="scss">
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

	.example-body {
		/* #ifndef APP-NVUE */
		// display: block;
		/* #endif */
	}

	.grid-dynamic-box {
		margin-bottom: 15px;
	}

	.grid-item-box {
		flex: 1;
		// position: relative;
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
		// position: relative;
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