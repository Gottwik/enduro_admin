enduro_admin_app.factory('juice_service', function juice_service ($http, url_config, $cookies, modal_service, $rootScope) {
	var juice_service = {}

	juice_service.pull = function () {

		$rootScope.diff_result = {}

		var forcepull_response

		return modal_service.open('juice_pull')
			.then(function () {
				$('.modal .connecting_progressbar')[0].start()
				return $('.modal .connecting_progressbar')[0].finish()
			})
			.then(function () {
				$('.modal .downloading_content')[0].start()
				return $http.get(url_config.get_api_url('juice_pull'), { params: { sid: $cookies.get('sid') } })
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
				// modal_service.close()

				$rootScope.diff_result = forcepull_response.data.diff_result
				if (forcepull_response.data) {
					// return forcepull_response.data
				} else {
					console.log('error updating content')
				}
			})
	}

	juice_service.push = function () {
		$rootScope.diff_result = {}

		var push_response

		return modal_service.open('juice_push')
			.then(function () {
				$('.modal .connecting_progressbar')[0].start()
				return $('.modal .connecting_progressbar')[0].finish()
			})
			.then(function () {
				$('.modal .downloading_content')[0].start()
				return $http.get(url_config.get_api_url('juice_push'), { params: { sid: $cookies.get('sid') } })
			})
			.then(function (res) {
				push_response = res
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
				// modal_service.close()
				$rootScope.outstanding_changes = []
				$rootScope.diff_result = push_response.data.diff_result
				if (push_response.data) {
					return push_response.data
				} else {
					console.log('error updating content')
				}
			})
	}

	return juice_service
})
