enduro_admin_app.controller('image_controller', ['$scope', 'image_service', function ($scope, image_service) {

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

}])
