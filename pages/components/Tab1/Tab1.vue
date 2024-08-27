<template>
	<view>
		<!-- <view v-for="(item, index) in tabBars" :key="item.id"> -->
			<uni-grid :column="3" :highlight="true">
				<uni-grid-item v-for="(item, index) in tabBars" :index="index" :key="index" 
				marker="image" :hor="35" :ver="-45" :img-width="25" :src="item.icon">
					<view class="grid-item-box" style="background-color: #fff;">
						<uni-icons type="image" :size="30" color="#777" :custom-prefix="item.icon" />
						<text class="text">{{item.name}}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		<!-- </view> -->
	</view>
</template>

<script>
	export default {
		props: {
			typeid: {
				type: Number,
				default: 1
			}
		},
		data() {
			return {
				name: 'Tab1',
				tabBars: [],
				avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
				extraIcon: {
					color: '#4cd964',
					size: '22',
					type: 'gear-filled'
				}
			};
		},
		created() {
			console.log(this.typeid);
			this.tabBars = [{
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
</style>