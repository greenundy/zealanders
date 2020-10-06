/**
 * Created by Emlyn Hughes on 28/04/18.
 */
module.exports = {
	chainWebpack: config => {
		config.module
			.rule('svg')
			.use('file-loader')
			.loader('vue-svg-loader')
	}
}