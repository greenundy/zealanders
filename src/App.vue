<template>
  <div :class="['app', 'locale_'+locale, currentSection >= 4 ? 'light' : 'dark', isMobile ? 'mobile' : 'desktop' ]">
	<div class="screens">
		<Sidebar v-if="!isMobile" :current="currentSection" />
		<Landing :show-intro="!isMobile" class="page show"/>
		<Criteria :scroll="scroll" :class="{page: true, show: maxSections >= 0.8}"/>
		<Ethos :class="{page: true, show: maxSections >= 1.8}"/>
		<About :class="{page: true, show: maxSections > 2.8}"/>
		<Investments :mobile="isMobile" :learnScrollPos="scrollHeight" :class="{page: true, show: true}"/>
		<Contact :class="{page: true, show: true}"/>
		<LangToggle v-on:locale-change="onLocaleChange"/>
	</div>
	<BG class="BG" :scroll="scrollFactor"/>
  </div>
</template>

<script>
import Landing from './components/Landing';
import Criteria from './components/Criteria';
import Ethos from './components/Ethos';
import About from './components/About';
import Investments from './components/Investments';
import Contact from './components/Contact';
import Sidebar from "./components/Sidebar";
import LangToggle from "./components/LanguageToggle";
import BG from './components/BG';

const h = document.documentElement,
	b = document.body,
	st = 'scrollTop',
	sh = 'scrollHeight';

export default {
	name: 'app',
	components: {
		Sidebar,
		Landing,
		Criteria,
		Ethos,
		About,
		Investments,
		Contact,
		LangToggle,
		BG
	},
	data: () => {
		return {
			scroll: 0,
			scrollHeight: 1,
			sections: 6,
			maxSections: 0,
			locale: "",
			isMobile: false
		}
	},
	mounted() {
		this.locale = this.$i18n.locale;
		window.addEventListener('scroll', this.onScroll);
		window.addEventListener('resize', this.onResize);
		this.onScroll();
		this.onResize();
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.onScroll);
		window.removeEventListener('resize', this.onResize);
	},
	computed: {
		scrollFactor() {
			return (this.scroll/this.scrollHeight);
		},
		sectionPos() {
			return Math.min( this.scrollFactor * this.sections, this.sections - 1 );
		},
		currentSection() {
			return Math.floor( this.sectionPos );
		}
	},
	watch: {
		sectionPos( val ) {

			if( val > this.maxSections ) {
				this.maxSections = val;
			}
		}
	},
	methods: {
		onScroll() {
			this.scroll = (h[st]||b[st]);

		},
		onResize() {
			this.isMobile = window.innerWidth <= 1024;

			this.scrollHeight = ((h[sh]||b[sh]) - h.clientHeight);
		},
		onLocaleChange( locale ) {
			this.$i18n.locale = this.locale = locale;
		}
	}
}
</script>

<style lang="less">

.app.locale_zh {
	font-family: 'Noto Sans SC Sliced', sans-serif;
}

.app {
	font-family: 'Catamaran', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #fff;
	overflow-x: hidden;
	position: relative;

	&.locale_zh {
	}

	.screens {
		z-index: 10;
		position: relative;
	}

	.BG {
		z-index: 1;
		position: absolute;
		top: 0;
		left: 0;
	}



	.page {
		width: 100vw;
		min-height: 100vh;

		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		opacity: 0;
		transition: opacity 1s ease-out, transform 1s ease-out;
		transform: translateY(200px);

		&.show {
			opacity: 1;
			transform: translateY(0);
		}
	}



}

.mobile .page {
	opacity: 1;
	transform: translateY(0);
}

h2 {
	font-size: 60px;
	font-weight: bold;
	line-height: 1em;
}

.title {
	width: 800px;
	text-align: left;

	.mobile & {
		width: auto;
		font-size: 2.4em;
		font-weight: normal;
		padding: 6vw;
	}
}

.body_block {
	width: 480px;
	position: relative;
	left: 240px;
	text-align: left;

	.mobile & {
		left: 0;
		width: auto;
		padding: 6vw;
	}
}

</style>
