<template>
	<div class="investments">
		<div class="investment_content">
			<h2 class="title">{{$t("AOI.name")}}</h2>
			<p class="desc">{{$t("AOI.body")}}</p>
			<div class="panels">
				<div v-for="(investment,index) in $t('AOI.investments')"
					:key="index"
					:class="[index,'panel', selected === index ?  'selected' : null]"
					v-on:click="selectPanel(index)"
				>
					<div class="panel_content">
						<div v-if="mobile" class="invest_image"><img :src="require('../assets/img/invest_'+index+'.jpg')"/></div>
						<div class="copy">
							<h3>{{investment.title}}</h3>
							<p>{{investment.body}}</p>
							<div class="learn" v-on:click.prevent="learnMore"><a href="">{{$t("AOI.learn")}}</a></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TWEEN from '../Tween';

export default {
	name: "Investments",
	props: ["mobile","learnScrollPos"],
	data() {
		return {
			"selected": null
		}
	},
	methods: {
		selectPanel( section ) {
			this.selected = this.selected == section ? null : section;
		},
		learnMore() {

			const scroll = { scrollY: window.scrollY };

			new TWEEN.Tween(scroll)
				.to( { scrollY: this.learnScrollPos }, 400)
				.easing( TWEEN.Easing.Cubic.Out )
				.onUpdate( () => {
					window.scrollTo(0,scroll.scrollY)
				})
				.start();

		}
	}
}
</script>

<style lang="less" scoped>

	@gutter: 6vw;

	.investments {
		background-color: #D9D9D9;
		color: #252525;

		.investment_content {
			align-items: left;
			text-align: left;
			color: #849BA1;

			.mobile & {
				color: currentColor;
			}
		}


		.panels {
			display: flex;
			width: 70vw;
			justify-content: space-between;
			margin-top: 40px;

			.mobile & {
				width: auto;
				flex-direction: column;
			}

		}

		.investment {



		}

		.title {
			margin-top: 60px;
			margin-bottom: 0;
			color: #252525;
			text-transform: uppercase;
			font-size: 2.5em;
		}

		.desc {
			width: 720px;
			font-size: 1.2em;

			.mobile & {
				width: auto;
				font-size: 1.0em;
				color: currentColor;
				padding: 0 @gutter;
			}
		}

	}

	.panel {
		flex-shrink: 1;
		transition: flex-shrink 300ms ease-in-out;
		overflow: hidden;
		margin: 0 8px;
		color: #252525;

		.mobile & {
			margin: 0;
		}

		.desktop & {
			&:first-child {
				margin: 0 8px 0 0;
			}

			&:last-child {
				margin: 0 0 0 8px;
			}

		}

	}

	.selected.panel {
		cursor: auto;
		flex-shrink: 0;

		.panel_content {
			cursor: auto;
		}
	}

	.panel_content {

		width: 940px;
		height: 628px;
		display: flex;
		justify-content: flex-end;
		background-size: cover;
		cursor: pointer;

		.mobile & {
			width: 100vw;
			height: auto;
			flex-direction: column;
		}

		.invest_image {
			padding: 0 @gutter;
			img {
				width: 100%;
			}
		}

		.copy {
			background: white;
			width: 370px;
			box-sizing: border-box;
			padding: 100px 40px 40px 40px;
			position: relative;

			.mobile & {
				width: 100vw;
				padding: 10vw @gutter 40vw @gutter;
				background: inherit;
			}

			h3 {
				font-size: 1.3em;
				text-transform: uppercase;
				letter-spacing: 0.4em;
				margin: 0 0 100px 0;

				.mobile & {
					margin: 0;
				}
			}
		}

		.learn {
			text-transform: uppercase;
			position: absolute;
			bottom: 42px;
			font-size: 1.1em;
			letter-spacing: 0.3em;

			.mobile & {
				position: inherit;
				bottom: auto;
			}

			a {
				color: currentColor;
				text-decoration: none;
				font-weight: bold;
			}
		}

		.land & {
			background-image: url(../assets/img/invest_land.jpg);

			.mobile & {
				background: none;
			}

		}

		.genetics & {
			background-image: url(../assets/img/invest_genetics.jpg);

			.mobile & {
				background: none;
			}
		}
		.transport & {
			background-image: url(../assets/img/invest_transport.jpg);
			background-size: contain;

			.mobile & {
				background: none;
			}
		}
		.hightech & {
			background-image: url(../assets/img/invest_hightech.jpg);
			background-size: contain;

			.mobile & {
				background: none;
			}
		}

	}
</style>