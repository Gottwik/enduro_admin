// * ———————————————————————————————————————————————————————— * //
// * 	menupage controller
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.controller('menupage_controller', ['$scope', '$rootScope', function ($scope, $rootScope) {

	$scope.cmslist = $scope.page

	$scope.pageclick = function () {
		clear_active($rootScope.cmslist)
		$scope.cmslist.active = true
	}

	function clear_active (scope) {
		scope.active = false
		for (s in scope) {
			if (typeof scope[s] === 'object') {
				clear_active(scope[s])
			}
		}
	}

}])
