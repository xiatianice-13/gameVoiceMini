<template>
	<div id="app">
		<!-- Tabs Row -->
		<div class="tabs-container">
			<div v-for="(item, index) in tabBars" :key="item.id" class="tab-item"
				:class="tabIndex === index ? 'active' : ''" @click="changeTab(index)">
				{{ item.name }}
			</div>
		</div>

		<!-- Content Area -->
		<div class="content-area">
			<component :is="currentComponent" :typeid="tabIndex"></component>
		</div>
	</div>
</template>

<script>
	import Tab1 from '../components/Tab1/Tab1.vue';
	import Tab2 from '../components/Tab2/Tab2.vue';

	export default {
		data() {
			return {
				tabBars: [],
				tabIndex: 0,
				componentsMap: {
					Tab1,
					Tab2,
				},
			};
		},
		computed: {
			currentComponent() {
				const componentKey = `Tab${this.tabBars[this.tabIndex].id}`;
				return this.componentsMap[componentKey] || null;
			}
		},
		onLoad() {
			this.tabBars = [{
					id: 1,
					name: '游戏分类'
				},
				{
					id: 2,
					name: '主播分类'
				},
			]
		},
		methods: {
			changeTab(index) {
				this.tabIndex = index;
			},
		},
	};
</script>

<style scoped>
	#app {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.tabs-container {
		display: flex;
		border-bottom: 1px solid #ddd;
		/* Border for the bottom of tabs */
	}

	.tab-item {
		flex: 1;
		/* Distribute width equally */
		text-align: center;
		padding: 10px;
		cursor: pointer;
		position: relative;
	}

	.tab-item:not(:last-child)::after {
		content: '';
		position: absolute;
		right: 0;
		top: 50%;
		width: 1px;
		height: 50%;
		background-color: #ddd;
		transform: translateY(-50%);
	}

	.active {
		color: #007aff;
		font-weight: bold;
	}

	.content-area {
		flex: 1;
		padding: 20px;
		background-color: #ffffff;
	}
</style>