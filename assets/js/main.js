require.config({
	baseUrl: '/assets/',

	paths: {
		jquery: 'vendor/jquery/dist/jquery',
		tooltipster: 'vendor/tooltipster/dist/js/tooltipster.bundle'
	},

	map: {
		'*': { 'jQuery': 'jquery'}
	},
})

require(['jquery'], function ($) {
	require(['tooltipster'], function () {

	})
})
