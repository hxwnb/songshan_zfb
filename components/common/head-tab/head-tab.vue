<template>
	<scroll-view class="wuc-tab" :class="[isTop ? 'fixed': '', tabClass]" :style="tabStyle" scroll-with-animation scroll-x :scroll-left="scrollLeft">
		<div v-if="!textFlex">
			<div class="wuc-tab-item" :class="[index === tabCur ? selectClass + ' cur':'']" v-for="(item,index) in tabList" :key="index"
			 :id="index" @tap="tabSelect(index,$event)">
				<text :class="item.icon"></text>
				<span>{{item.name}}</span>
			</div>
		</div>

		<div class="flex text-center" v-if="textFlex">
			<div class="wuc-tab-item flex-sub" :class="index === tabCur ? selectClass + ' cur':''" v-for="(item,index) in tabList"
			 :key="index" :id="index" @tap="tabSelect(index,$event)">
				<text :class="item.icon"></text>
				<span>{{item.name}}</span>
			</div>
		</div>
	</scroll-view>
</template>

<script>
	export default {
		name: 'wuc-tab',
		data() {
			return {};
		},
		props: {
			tabList: {
				type: Array,
				default () {
					return [];
				}
			},
			tabCur: {
				type: Number,
				default () {
					return 0;
				}
			},
			tabClass: {
				type: String,
				default () {
					return '';
				}
			},
			tabStyle: {
				type: String,
				default () {
					return '';
				}
			},
			textFlex: {
				type: Boolean,
				default () {
					return true;
				}
			},
			selectClass: {
				type: String,
				default () {
					return 'text-blue';
				}
			},
			isTop: {
				type: Boolean,
				default() {
					return true;
				}
			}
		},
		methods: {
			tabSelect(index, e) {
				if (this.currentTab === index) return false;
				this.$emit('update:tabCur', index);
				this.$emit('change', index);
			}
		},
		computed: {
			scrollLeft() {
				return (this.tabCur - 1) * 60;
			}
		}
	};
</script>

<style lang="scss" scoped>
	scroll-view,
	swiper {
		box-sizing: border-box;
		border-bottom: 1px solid rgba(238, 238, 238, 0.65);
	}

	.wuc-tab {
		white-space: nowrap;
		background-color: #ffffff;
		height: auto;
	}

	.wuc-tab-item {
		text-align: center;
		font-size: 32upx;
		height: 90upx;
		display: inline-block;
		line-height: 90upx;
		margin: 0 10upx;
		padding: 0 20upx;
	}

	.wuc-tab-item.cur {
		span {
			border-bottom: 4upx solid;
		}
		
	}

	.wuc-tab.fixed {
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 1024;
		// box-shadow: 0 1upx 6upx rgba(0, 0, 0, 0.1);
	}

	.flex {
		display: flex;
	}

	.text-center {
		text-align: center;
	}

	.flex-sub {
		flex: 1;
	}

	.text-blue {
		color: #D39C66;
	}

	.text-white {
		color: #ffffff;
	}

	.bg-white {
		background-color: #ffffff;
	}

	.bg-blue {
		background-color: #D39C66;
	}

	.text-orange {
		color: #f37b1d
	}

	.text-xl {
		font-size: 36upx;
	}
</style>
