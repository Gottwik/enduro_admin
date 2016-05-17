var enduro_admin_app = angular.module('enduro_admin',['ngRoute', 'ngCookies']);


enduro_admin_app
	.constant('url_config', {
		get_base_url: function() {
			return (window.location.href.indexOf('localhost') + 1)
				?	'http://localhost:5000/admin_api/'
				:	'/admin_api/'
		}
	})
	.constant('path_config', {
		get_views_path: '/assets/js/views/'
	})


enduro_admin_app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    	.when('/login', {
	    	templateUrl: '/assets/js/views/login.html'
	    })
	    .when('/dashboard', {
	    	templateUrl: '/assets/js/views/dashboard.html'
	    })
	    .when('/pages/:page_name', {
	    	templateUrl: '/assets/js/views/admin.html'
	    })
	    .otherwise({ redirectTo: '/login' })
  }]);


enduro_admin_app.run(['$rootScope', '$location', 'user_service', function($rootScope, $location, user_service) {

	$rootScope.$on('$locationChangeSuccess', function() {
		if(!user_service.is_logged_in()) {
			$location.path('/login')
		}
	})

}])