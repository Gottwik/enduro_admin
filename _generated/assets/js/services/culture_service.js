enduro_admin_app.factory('culture_service', ['$http', 'url_config', '$cookies', 'user_service', function culture_service ($http, url_config, $cookies, user_service) {
	var culture_service = {}

	culture_service.get_cultures = function () {
		return $http.get(url_config.get_base_url() + 'get_cultures', {cache: true, params: {sid: $cookies.get('sid')}})
			.then(function (res) {
				if (res.data && res.data.success) {
					return res.data.data
				} else {
					console.log('error getting page list')
				}
			}, user_service.error)
	}

	return culture_service
}])
