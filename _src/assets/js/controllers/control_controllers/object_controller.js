// * ———————————————————————————————————————————————————————— * //
// * 	object controller
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.controller('object_controller', ['$scope', 'format_service', 'preloader_service', function ($scope, format_service, preloader_service) {

	// sets the formated name from the object's key
	$scope.object_name = format_service.deslug($scope.key)

	$scope.parent_no_frame = $scope.no_frame
	$scope.no_frame = false

	if ($scope.value) {
		if ($scope.terminated_context && $scope.terminated_context.expander) {
			$scope.context = {}
		} else {
			$scope.context = $scope.value
		}
	}

	preloader_service.add_to_be_loaded_object()
	setTimeout(function () {
		preloader_service.remove_to_be_loaded_object()
	})

	// action when expander button is clicked
	$scope.expand = function () {
		if ($scope.context_is_not_empty()) {
			$scope.context = {}
		} else {
			$scope.context = $scope.value
		}
	}

	// helper function that checks if context of this object is empty
	$scope.context_is_not_empty = function () {
		return Object.keys($scope.context).length > 0
	}

}])
