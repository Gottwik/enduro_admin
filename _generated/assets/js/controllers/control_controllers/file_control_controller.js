// * ———————————————————————————————————————————————————————— * //
// * 	file control controller
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.controller('file_control_controller', function ($scope, image_service, $sce, $element, $timeout) {
	

	$scope.upload = function (file) {
		if (!file) {
			return
		}

		$scope.loading = true

		$('.img-dropper').blur()
		// catch pasted image
		if (typeof file === 'object' && !file.name) {
			file = file[0]
			file.name = Math.random().toString(36).substring(7) + '.' + file.type.match(/\/(.*)$/)[1]
		}
		$timeout(function () {
			image_service.upload_image(file, $scope.progress_update)
				.then(function (image_url) {
					$scope.context[$scope.terminatedkey] = image_url
					$timeout(function () { $scope.loading = false }, 500)
				})
		}, 250)
	}

	$scope.has_file = function () {
		return $scope.context[$scope.terminatedkey]
	}

	$scope.get_file_name = function () {
		if ($scope.context[$scope.terminatedkey]) {
			return $scope.context[$scope.terminatedkey].split('/').slice(-1)[0]
		} else {
			return ''
		}
	}

	$scope.delete_file = function () {
		$scope.context[$scope.terminatedkey] = ''
	}

	// direct input of an url
	$scope.direct_input = function () {
		$element.toggleClass('direct-input-enabled')
	}

})
