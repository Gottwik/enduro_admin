enduro_admin_app = angular.module('enduro_admin', ['ngRoute', 'ngCookies', 'ngFileUpload', 'cfp.hotkeys'], function ($rootScopeProvider) {
	$rootScopeProvider.digestTtl(25)
})

// defining constants
enduro_admin_app
	.constant('url_config', {
		get_base_url: function () {

			// checks for a special case when the admin runs from port 3000
			// when developing the enduro_admin, all the api calls are redirected to port 5000
			// otherwise will just use the regular /admin_api/ base
			return (window.location.href.indexOf('localhost:3000') + 1)
				? 'http://localhost:5000/admin_api/'
				: '/admin_api/'
		},
		get_api_url: function (api_endpoint) {
			return this.get_base_url() + api_endpoint
		}
	})
	.constant('path_config', {
		get_views_path: '/admin/assets/js/views/'
	})

// routing configuration
enduro_admin_app.config(
	function ($routeProvider, $compileProvider) {

		$routeProvider
			.when('/login', {
				templateUrl: '/admin/login/index.html',
				controller: 'pagesplit_controller'
			})
			.when('/', {
				templateUrl: '/admin/layout/main_layout/index.html',
				controller: 'pagesplit_controller'
			})
			.when('/cms/:page_path*', {
				templateUrl: '/admin/layout/main_layout/index.html',
				controller: 'pagesplit_controller',
			})
			.otherwise({ redirectTo: '/' })

		// store compileprovider
		enduro_admin_app.compileProvider = $compileProvider
	}
)

enduro_admin_app.run(function ($rootScope, $location, user_service, extension_service, content_service) {

	$rootScope._ = _

	// location change event
	$rootScope.$on('$locationChangeSuccess', function () {
		user_service.is_logged_in()
			.then(function (data) {
				if (!data.data.success) {
					$location.path('/login')
				} else {
					$rootScope.user = data.data.user
				}
			}, function () {
				$location.path('/login')
			})
	})

	extension_service.inject()

	// fetch enduro settings
	$rootScope.settings = {}
	$rootScope.settings.juicebox_enabled = true
	$rootScope.settings.has_admins = true
	content_service.get_application_settings()
		.then(function (settings) {
			$rootScope.settings = settings.data
		})

	// $rootScope.socket = io()

	// $rootScope.socket.on('news', (data) => {
	// 	console.log('got news')
	// })
})
