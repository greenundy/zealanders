<template>
    <a class="langButton" v-on:click="toggle">{{label}}</a>
</template>

<script>
export default {
	name: "LanguageToggle",
	data: () => ({
	}),
	computed: {
		label() {
			return this.$t('locale', this.altLocale );
		},
		altLocale() {
			return this.$i18n.locale == 'en' ? 'zh' : 'en';
		}
	},
	methods: {
		toggle() {
			this.$emit('locale-change',this.altLocale);
		}
	}
}
</script>

<style lang="less" scoped>
	.langButton {
		position: fixed;
		bottom: 20px;
		right: 20px;
		cursor: pointer;
        z-index: 30;

        .light & {
            color: #000;
        }

	}
</style>