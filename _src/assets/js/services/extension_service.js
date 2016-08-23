enduro_admin_app.factory('extension_service', ['$http', 'url_config', '$cookies', 'user_service', function extension_service ($http, url_config, $cookies, user_service) {
	var extension_service = {}

	extension_service.inject = function (username, password) {
		return $http.get(url_config.get_base_url() + 'get_admin_extensions', {params: {sid: $cookies.get('sid')}})
			.then(function (res) {
				if (res.data && res.data.success) {
					for (r in res.data.data) {
						$('<script>')
							.attr('type', 'text/javascript')
							.attr('src', get_link_to_extension(res.data.data[r]))
							.appendTo('head')
					}
				} else {
					console.log('error getting extension list')
				}
			}, user_service.error)
	}

	function get_link_to_extension (extension) {
		return '/assets/admin_extensions/' + extension
	}

	return extension_service
}])
