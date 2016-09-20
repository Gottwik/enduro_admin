// * ———————————————————————————————————————————————————————— * //
// * 	menupage controller
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.controller('page_preloading_controller', ['$scope', '$rootScope', function ($scope, $rootScope) {

	$scope.progress = $rootScope.preloaded_objects_count
	$scope.$watch(function () {
		return $rootScope.preloaded_objects_count
	}, function () {
		$scope.progress = $rootScope.preloaded_objects_count
	})

}])
