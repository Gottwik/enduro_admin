enduro_admin_app.factory('image_service', ['url_config', '$cookies', '$q', 'Upload', 'user_service', function image_service(url_config, $cookies, $q, Upload, user_service) {
	var image_service = {};


	image_service.upload_image = function(file) {
		return $q(function(resolve, reject) {
			Upload.upload({
				url: url_config.get_base_url() + 'img_upload',
				data: {
					sid: $cookies.get('sid'),
					file: file
				}
			}).then(function (res) {
				if(res.data.success) {
					console.log('uploaded', res.data.image_url)
					resolve(res.data.image_url)
				} else {
					console.log('upload not successfull')
				}
			},
			user_service.error,
			function (evt) {
				var progress = parseInt(100.0 * evt.loaded / evt.total)

				console.log(progress)
			})
		})
	}

	return image_service
}]);