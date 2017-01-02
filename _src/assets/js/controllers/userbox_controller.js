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

	$scope.forcepull = function () {
		juice_service.forcepull()
			.then(function () {
				console.log('AAAAA')
				$location.path('/cms/index')
			})
	}

})
