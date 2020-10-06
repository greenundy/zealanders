<template>
	<div id="landing">
		<transition name="fade" mode="out-in">
		<SpriteSheet :speed="0.5" v-if="intro && showIntro" v-on:complete="onLogoAnimComplete" :sheet-frames="sheetFrames"/>
		<div class="svgLogo" v-else>
			<ZSVG class="Z"/>
			<ZealandersSVG class="Zealanders" :alt="$t('zealanders')"/>
		</div>
		</transition>
	</div>
</template>

<script>
import TWEEN from '@tweenjs/tween.js';
import SpriteSheet from './SpriteSheet';

import ZSVG from '@/assets/img/Z.svg';
import ZealandersSVG from '@/assets/img/Zealanders.svg';

export default {
	name: "Landing",
	components: {
		SpriteSheet,
		ZSVG,
		ZealandersSVG
	},
	props: ["showIntro"],
	data() {
		return {
			sheetFrames: null,
			intro: true
		}
	},
	created() {
		import('@/assets/logo_sheet.json')
			.then( LogoSheet => {
				this.sheetFrames = LogoSheet;
			} );

	},
	methods: {
		onLogoAnimComplete() {
			this.intro = false;

			if( window.scrollY === 0 ) {

				const scroll = {scrollY: window.scrollY};

				new TWEEN.Tween(scroll)
					.to({scrollY: window.innerHeight}, 400)
					.easing(TWEEN.Easing.Cubic.Out)
					.onUpdate(() => {
						window.scrollTo(0, scroll.scrollY)
					})
					.start();
			}
		}
	}
}
</script>

<style lang="less" scoped>
    #landing {
		.svgLogo {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.Z {
			width: 40vw;
			max-width: 300px;
			fill: currentColor;
		}

		.Zealanders {

			width: 60vw;
			max-width: 400px;
			fill: currentColor;
			margin-top: 6vw;

			.mobile & {
				margin-top: 15vw;
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
    }
</style>