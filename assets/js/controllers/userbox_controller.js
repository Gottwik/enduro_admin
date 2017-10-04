// * ———————————————————————————————————————————————————————— * //
// * 	logout controller
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.controller('userbox_controller', function ($scope, user_service, $location, juice_service) {

	$scope.logout = function () {
		user_service.logout()
			.then(function () {
				$location.path('/login')
			})
	}

	$scope.push = function () {
		juice_service.push()
			.then(function () {
				$location.path('/cms/index')
			})
	}

	$scope.pull = function () {
		juice_service.pull()
			.then(function () {
				$location.path('/cms/index')
			})
	}

})
