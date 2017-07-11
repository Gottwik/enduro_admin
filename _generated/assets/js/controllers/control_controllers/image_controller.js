// * ———————————————————————————————————————————————————————— * //
// * 	image controller
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.controller('image_controller', function ($scope, image_service, $sce, $element, $timeout) {

	$scope.loading = false

	// upload on file select or drop
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

	$scope.delete_image = function () {
		$scope.context[$scope.terminatedkey] = ''
	}

	$scope.video_source = $sce.trustAsResourceUrl($scope.context[$scope.terminatedkey])

	$scope.play = function () {
		video_element = $element.find('video').get(0)
		if (video_element.paused) {
			$element.find('video').get(0).play()
			$scope.video_playing = true
		} else {
			$element.find('video').get(0).pause()
			$scope.video_playing = false
		}
	}

	// direct input of an url
	$scope.direct_input = function () {
		$element.toggleClass('direct-input-enabled')
	}

	$scope.get_filename = function () {
		return $scope.context[$scope.terminatedkey].split('/').slice(-1)[0].split('_').slice(1).join('_')
	}

})
