// * ———————————————————————————————————————————————————————— * //
// * 	image controller
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.controller('image_controller', ['$scope', 'image_service', '$sce', '$element', function ($scope, image_service, $sce, $element) {

	$scope.progress = 100

	// upload on file select or drop
	$scope.upload = function (file) {

		$('.img-dropper').blur()
		// catch pasted image
		if (typeof file === 'object' && !file.name) {
			file = file[0]
			file.name = Math.random().toString(36).substring(7) + '.' + file.type.match(/\/(.*)$/)[1]
		}

		image_service.upload_image(file)
			.then(function (image_url) {
				$scope.context[$scope.terminatedkey] = image_url
			})
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

}])
