enduro_admin_app = angular.module('enduro_admin', ['ngRoute', 'ngCookies', 'ngFileUpload', 'cfp.hotkeys'], function ($rootScopeProvider) {
	$rootScopeProvider.digestTtl(25)
})

// defining constants
enduro_admin_app
	.constant('url_config', {
		get_base_url: function () {
			return (window.location.href.indexOf('localhost') + 1)
				?	'http://localhost:5000/admin_api/'
				:	'/admin_api/'
		},
		get_api_url: function (api_endpoint) {
			return this.get_base_url() + api_endpoint
		}
	})
	.constant('path_config', {
		get_views_path: '/admin/assets/js/views/'
	})

// routing configuration
enduro_admin_app.config(['$routeProvider',
	function ($routeProvider) {

		$routeProvider
			.when('/login', {
				templateUrl: '/admin/login.html',
				controller: 'pagesplit_controller'
			})
			.when('/', {
				templateUrl: '/admin/layout/main_layout.html',
				controller: 'pagesplit_controller'
			})
			.when('/cms/:page_path*', {
				templateUrl: '/admin/layout/main_layout.html',
				controller: 'pagesplit_controller',
			})
			.otherwise({ redirectTo: '/' })
	}]
)

enduro_admin_app.run(function ($rootScope, $location, user_service, extension_service) {

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

	$

	extension_service.inject()

})
