import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'

import language from './language';

Vue.config.productionTip = false;

Vue.use(VueI18n);

const i18n = new VueI18n({
	locale: 'en',
	fallbackLocale: 'en',
	messages: language,
});

new Vue({
	i18n,
	render: h => h(App)
}).$mount('#app')
