<template>
	<view class="container">
		<uni-row class="demo-uni-row" :width="nvueWidth">
		  <uni-col 
		    v-for="(voice, index) in voiceList" 
		    :key="index"
		    :span="12"
		  >
		    <view class="demo-uni-col">
		      <button 
		        :key="voice.id"
		        class="mini-btn buttons"
		        type="primary"
		        size="mini"
		        @click="playAudio(voice.url)"
		      >
		        {{ voice.name + "--" + voice.remark }}
		      </button>
		    </view>
		  </uni-col>
		</uni-row>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				nvueWidth: 730,
				voiceList: [{
						id: 1,
						name: "茄子",
						url: "https://gullu-edu.oss-cn-hangzhou.aliyuncs.com/qz-qnl.mp3",
						remark: "求你了",
					},
					{
						id: 1,
						name: "茄子",
						url: "https://gullu-edu.oss-cn-hangzhou.aliyuncs.com/qz-qnl.mp3",
						remark: "求你了",
					},
					{
						id: 1,
						name: "茄子",
						url: "https://gullu-edu.oss-cn-hangzhou.aliyuncs.com/qz-qnl.mp3",
						remark: "求你了",
					},
					{
						id: 1,
						name: "茄子",
						url: "https://gullu-edu.oss-cn-hangzhou.aliyuncs.com/qz-qnl.mp3",
						remark: "求你了",
					}
				]
			}
		},
		onLoad(query) {
			if(query.gameId){
				console.log(query.gameId);
			}
			if(query.playerId){
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
				const audioContext = wx.createInnerAudioContext();
				audioContext.src = audioSrc;
				audioContext.onPlay(() => {
					console.log('音频开始播放');
				});
				audioContext.onError((res) => {
					console.log('音频播放错误', res);
				});
				audioContext.play();
			}
		}
	}
</script>

<style>
	.buttons {
		margin: 5px;
	}

	.demo-uni-row {
			margin-bottom: 10px;
	
			/* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
			display: block;
			/* #endif */
		}
		.demo-uni-col {
				height: 36px;
				border-radius: 5px;
				
			}
			.dark {
				background-color: #d3dce6;
			}
		
			.light {
				background-color: #e5e9f2;
			}
</style>