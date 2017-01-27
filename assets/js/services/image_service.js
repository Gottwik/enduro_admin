enduro_admin_app.factory('image_service', ['url_config', '$cookies', '$q', 'Upload', 'user_service', function image_service (url_config, $cookies, $q, Upload, user_service) {
	var image_service = {}

	image_service.upload_image = function (file) {
		return $q(function (resolve, reject) {
			Upload.upload({
				url: url_config.get_base_url() + 'img_upload',
				data: {
					sid: $cookies.get('sid'),
					file: file
				}
			}).then(function (res) {
				if (res.data.success) {
					console.log('uploaded', res.data.image_url)
					resolve(res.data.image_url)
				} else {
					console.log(res)
					console.log('upload not successfull')
					reject()
				}
			},
			user_service.error)
		})
	}

	return image_service
}])
