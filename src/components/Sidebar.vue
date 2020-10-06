<template>
	<transition name="fade">
    <div id="side-bar" v-if="current > 0" :style="{ transform: scaleTransform }">
		<ZSVG class="Z"/>
        <ul>
			<transition-group name="fade">
            <li v-for="(section,index) in sections" :key="section" v-show="current === index">{{$t(section)}}</li>
			</transition-group>
        </ul>
		<div class="dots">
			<div v-for="(section,index) in sections" :key="section" v-if="index !== 0" :class="{dot:true, current: current === index}"></div>
		</div>
    </div>
	</transition>
</template>

<script>

import ZSVG from '@/assets/img/Z.svg';

export default {
	name: "Sidebar",
	props: ['current'],
	components: {
		ZSVG
	},
	data() {
		return {
			sections: [
				"zealanders",
				"about.name",
				"ethos.name",
				"criteria.name",
				"AOI.sidebar",
				"join.name"
			],
			scale: 1
		}
	},
	computed: {
		scaleTransform() {
			return `scale(${ this.scale }) translateY(${ 70 * this.scale }px)`
		}
	},
	mounted() {
		window.addEventListener('resize', this.onResize);
		this.onResize();
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.onResize);
	},
	methods: {
		onResize() {
			this.scale = Math.min( 1, window.innerHeight/950 );
		}
	}
}
</script>

<style lang="less" scoped>

	#side-bar {
		position: fixed;
		text-align: left;
		width: 215px;
		display: flex;
		flex-direction: column;
		align-items: center;
		transform-origin: top center;
		z-index: 30;

		.light & {
			color: #000;
		}

		.Z {
			width: 60px;
			fill: currentColor;
		}

		ul {
			list-style-type: none;
			position: relative;
			transform: rotate(90deg) translate(70px,-15px);

			li {
				position: absolute;
				top: 0;
				width: 400px;
				font-size: 1.5em;
				letter-spacing: 0.2em;
				text-transform: uppercase;
			}
		}

		.dots {

			padding-top: 450px;

			.dot {
				border-radius: 50%;
				width: 20px;
				height: 20px;
				background-color: currentColor;
				opacity: 0.4;
				margin-top: 40px;

				transition: opacity 0.2s ease;

				&.current {
					opacity: 1;
				}
			}
		}
	}

	.fade-enter {
		opacity: 0;
	}

	.fade-enter-active {
		transition: all 0.8s ease;
	}

	.fade-enter-to {
		opacity: 1;
	}

	.fade-leave {
		opacity: 1;
	}

	.fade-leave-active {
		transition: all 0.4s ease;
	}

	.fade-leave-to {
		opacity: 0;
	}
</style>