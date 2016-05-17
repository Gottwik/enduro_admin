enduro_admin_app.controller('login_controller', ['$scope', '$rootScope', '$http', 'user_service', '$location', function($scope, $rootScope, $http, user_service, $location) {
	$scope.submit = function() {
		user_service.login_by_password($scope.username, $scope.password)
			.then(function(data){
				console.log(data)
				if(data.success) {
					$location.path('/dashboard')
				} else {
					$location.path('/login')
				}
			})
	}
}]);