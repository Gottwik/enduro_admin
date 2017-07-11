// * ———————————————————————————————————————————————————————— * //
// * 	array controller
// * ———————————————————————————————————————————————————————— * //

enduro_admin_app.controller('array_controller', ['$scope', 'format_service', 'content_service', function ($scope, format_service, content_service) {

	// stores object name and capitalize and deslugs it
	$scope.object_name = format_service.deslug($scope.key)

	// moves the value to the context for it to propagate
	if ($scope.value) {
		if ($scope.terminated_context && $scope.terminated_context.expander) {
			$scope.context = {}
			$scope.expanded = false
		} else {
			$scope.context = $scope.value
			$scope.expanded = true
		}
	}

	if ($scope.templatitator) {
		content_service.get_globalized_context($scope.templatitator)
			.then(function (templates) {
				$scope.template_list = Object.keys(templates).map(function (key) {
					return {
						value: templates[key],
						label: key,
						formatted_label: format_service.deslug(key),
					}
				})
			})
	}

	// * ———————————————————————————————————————————————————————— * //
	// * 	actions
	// * ———————————————————————————————————————————————————————— * //

	// action when expander button is clicked
	$scope.expand = function () {
		$scope.expanded = !$scope.expanded
		if ($scope.context_is_not_empty()) {
			$scope.context = {}
		} else {
			$scope.context = $scope.value
		}
	}

	// clones first item in the array
	$scope.additem = function () {

		// copies the first item
		var new_item = angular.copy($scope.context[0])

		// clean the first item
		content_service.clean(new_item)

		// push cleaned item to the array
		$scope.context.push(new_item)
	}

	// deletes an item
	$scope.deleteitem = function (key) {
		$scope.context.splice(key, 1)
	}

	// duplicate an item
	$scope.duplicate = function (key) {
		$scope.context.push(angular.copy($scope.context[key]))
	}

	// handles reordering
	$scope.reorder = function (shift_from, shift_to) {

		// save from item
		var save_from = $scope.context[shift_from]

		// goes from shift_from to shift_to and shifts the elements
		for (var i = shift_from; i != shift_to; shift_from < shift_to ? i++ : i--) {
			$scope.context[i] = $scope.context[i + (shift_from < shift_to ? 1 : -1)]
		}

		// finally sets the shift_to to be equal to shift_from
		$scope.context[shift_to] = save_from

		// trigger update manually
		$scope.$apply()
	}

	$scope.add_template = function (context) {
		$scope.context.push(angular.copy(context))
	}

	// helper function that checks if context of this object is empty
	$scope.context_is_not_empty = function () {
		return Object.keys($scope.context).length > 0
	}

	$scope.is_expanded_and_visible = function () {
		return $scope.context_is_not_empty() || $scope.expanded
	}

}])
