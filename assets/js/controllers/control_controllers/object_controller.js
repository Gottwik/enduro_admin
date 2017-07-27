// * ———————————————————————————————————————————————————————— * //
// * 	object controller
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.controller('object_controller', function ($scope, format_service) {

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

	// hide meta Object
	if ($scope.key == 'meta') {
		$scope.terminated_context.hidden = true
	}

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
		return $scope.context && Object.keys($scope.context).length > 0
	}

})
