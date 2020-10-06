<template>
	<div class="bg">
		<div class="bgCircle bgCirlce1" :style="{ transform: ball1  }"></div>
		<div class="bgCircle bgCirlce2" :style="{ transform: ball2  }"></div>
		<div class="bgCircle bgCirlce3" :style="{ transform: ball3  }"></div>
		<div class="bgCircle bgCirlce4" :style="{ transform: ball4  }"></div>
	</div>
</template>

<script>
export default {
	name: "BG",
	props: ["scroll"],
	data() {
		return {
		}
	},
	computed: {
		ball1() {
			return `translateY(${this.scroll*50}vh)`;
		},
		ball2() {
			return `translateY(${this.scroll*70}vh)`;
		},
		ball3() {
			return `translateY(${this.scroll*120}vh)`;
		},
		ball4() {
			return `translateY(${this.scroll*-80}vh)`;
		}
	}
}
</script>

<style lang="less" scoped>

	.bg {

		position: absolute;
		top: 0;

		.bgCircle {
			border-radius: 50%;
			position: absolute;
			top: 0;
			left: 0;
			transform: translateY(0);
			will-change: transform;

		}

		.bgCirlce1 {

			background-color: #246970;
			background-image: linear-gradient(125deg, #246970, #102126);
			left: 10vw;
			top: 100vh;
			width: 640px;
			height: 640px;

			.mobile & {
				transform: translate(-20vw,100vh);
				width: 100vw;
				height: 100vw;
			}
		}

		.bgCirlce2 {
			background-color: #3e9a80;
			background-image: linear-gradient(125deg, #3e9a80, #233b3a);
			left: 57vw;
			top: 135vh;

			width: 450px;
			height: 450px;

			.mobile & {
				width: 60vw;
				height: 60vw;
			}
		}

		.bgCirlce3 {
			background-color: #246970;
			background-image: linear-gradient(125deg, #246970, #102126);
			left: 15vw;
			top: 164vh;

			width: 800px;
			height: 800px;

			.mobile & {
				width: 140vw;
				height: 140vw;
			}
		}

		.bgCirlce4 {
			background-color: #3e9a80;
			background-image: linear-gradient(125deg, #3e9a80, #233b3a);
			width: 1060px;
			height: 1060px;
			left: 23vw;
			top: 360vh;
		}
	}

</style>