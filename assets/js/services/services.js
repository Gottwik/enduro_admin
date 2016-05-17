enduro_admin_app.factory('user_service', ['$http', 'url_config', '$cookies', function user_service($http, url_config, $cookies) {
	var service = {};

	service.login_by_password = function(username, password) {
		return $http.get(url_config.get_base_url() + 'login_by_password', {params: {username: username, password: password}})
			.then(function(data) {
				console.log(data)
				$cookies.put('sid', data.data.sid);
				return data.data
			}, function() {
				console.log('error logging in')
			});
	}

	service.is_logged_in = function() {
		// refuse login if no cookie is set
		if(!$cookies.get('sid')) {
			return false
		}

		return $http.get(url_config.get_base_url() + 'check_session', {params: {sid: $cookies.get('sid')}})
	}

	return service;
}]);