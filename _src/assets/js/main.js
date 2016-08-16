require.config({
	baseUrl: '/assets/',

	paths: {
		jquery: 'vendor/jquery/dist/jquery',
		tooltipster: 'vendor/tooltipster/dist/js/tooltipster.bundle'
	},

	map: {
        // '*' means all modules that define the specified module will get the corresponding module
        // Some modules, for some reason, say require("jQuery") instead of require("jquery")
        "*": { "jQuery": "jquery"}
    },
});

require(['jquery'], function($) {
	require(['tooltipster'], function() {

	})
});