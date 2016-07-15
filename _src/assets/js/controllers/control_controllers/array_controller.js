// * ———————————————————————————————————————————————————————— * //
// * 	array controller
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.controller('array_controller', ['$scope', 'format_service', function($scope, format_service) {

	$scope.object_name = format_service.deslug($scope.key)
	$scope.no_frame = false
	if($scope.value) {
		$scope.context = $scope.value
	}

	$scope.additem = function() {
		$scope.context.push(angular.copy($scope.context[0]))
	}

	$scope.deleteitem = function(key) {
		$scope.context.splice(key, 1);
	}

	$scope.duplicate = function(key) {
		$scope.context.push(angular.copy($scope.context[key]))
	}

	$scope.reorder = function(shift_from, shift_to) {

		var save_from = $scope.context[shift_from]
		for(var i = shift_from; i != shift_to; shift_from < shift_to ? i++ : i--) {
			$scope.context[i] = $scope.context[i + (shift_from < shift_to ? 1 : -1)]
		}
		$scope.context[shift_to] = save_from

		$scope.$apply()
	}

}])