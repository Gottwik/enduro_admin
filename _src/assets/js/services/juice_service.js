enduro_admin_app.factory('juice_service', function juice_service ($http, url_config, $cookies, modal_service) {
	var juice_service = {}

	juice_service.forcepull = function (username, password) {

		var forcepull_response

		return modal_service.open('juice_forcepull')
			.then(function () {
				$('.modal .connecting_progressbar')[0].start()
				return $('.modal .connecting_progressbar')[0].finish()
			})
			.then(function () {
				$('.modal .downloading_content')[0].start()
				return $http.get(url_config.get_api_url('juice_pull_force'), {params: {sid: $cookies.get('sid')}})
			})
			.then(function (res) {
				forcepull_response = res
				return $('.modal .downloading_content')[0].finish()
			}, function () {
				console.log('connection to api failed')
			})
			.then(function () {
				$('.modal .unzipping_file')[0].start()
				return $('.modal .unzipping_file')[0].finish()
			})
			.then(function () {
				$('.modal .recompiling_website')[0].start()
				return $('.modal .recompiling_website')[0].finish()
			})
			.then(function () {

				// close the modal after 1 second
				modal_service.close()
				console.log(forcepull_response.data)
				if (forcepull_response.data) {
					// return forcepull_response.data
				} else {
					console.log('error updating content')
				}
			})
	}

	return juice_service
})
