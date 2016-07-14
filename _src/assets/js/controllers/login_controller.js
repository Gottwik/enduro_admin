// * ———————————————————————————————————————————————————————— * //
// * 	login controller
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.controller('login_controller', ['$scope', '$rootScope', '$http', 'user_service', '$location', 'content_service', function($scope, $rootScope, $http, user_service, $location, content_service) {

	// will store failed attempts to provide feedback to user what to do if they forgot the password
	$scope.failed_attempts = 0

	// detects if juicebox(versioning for cms at aws) to provide feedback to user if it is not enables
	$scope.juicebox_enabled = true
	content_service.get_juicebox_enabled()
		.then((juicebox_enabled) => {
			$scope.juicebox_enabled = juicebox_enabled.data
		})

	// user submits the login form
	$scope.submit = function() {
		user_service.login_by_password($scope.enduro_username, $scope.enduro_password)
			.then(function(data){
				if(data.success) {
					$location.path('/cms/index')
				} else {
					login_failed()
				}
			})
	}

	// provides visual feedback to user that the password was not correct
	function login_failed() {

		$scope.failed_attempts++

		if($scope.failed_attempts > 10) {
			provide_lost_password_assistance()
		}

		// store login card for later use
		var login_card = $('.login-card')

		// add failed and wiggle classes
		login_card.addClass('login-failed wiggle')

		// listen to wiggle animation change and remove wiggle class so it can be added again
		login_card.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
			login_card.removeClass('wiggle')
		});
	}

	function provide_lost_password_assistance() {

	}

}])