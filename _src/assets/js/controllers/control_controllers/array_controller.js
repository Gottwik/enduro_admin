// * ———————————————————————————————————————————————————————— * //
// * 	array controller
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.controller('array_controller', ['$scope', 'format_service', function($scope, format_service) {

	// stores object name and capitalize and deslugs it
	$scope.object_name = format_service.deslug($scope.key)

	// $scope.no_frame = false
	// if($scope.value) {

		// moves the value to the context for it to propagate
		$scope.context = $scope.value
	// }

	// clones first item in the array
	$scope.additem = function() {
		$scope.context.push(angular.copy($scope.context[0]))
	}

	// deletes an item
	$scope.deleteitem = function(key) {
		$scope.context.splice(key, 1);
	}

	// duplicate an item
	$scope.duplicate = function(key) {
		$scope.context.push(angular.copy($scope.context[key]))
	}

	// handles reordering
	$scope.reorder = function(shift_from, shift_to) {

		// save from item
		var save_from = $scope.context[shift_from]

		// goes from shift_from to shift_to and shifts the elements
		for(var i = shift_from; i != shift_to; shift_from < shift_to ? i++ : i--) {
			$scope.context[i] = $scope.context[i + (shift_from < shift_to ? 1 : -1)]
		}

		// finally sets the shift_to to be equal to shift_from
		$scope.context[shift_to] = save_from

		// trigger update manually
		$scope.$apply()
	}

}])