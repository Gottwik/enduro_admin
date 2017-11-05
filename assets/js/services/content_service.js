enduro_admin_app.factory('menu_cache', function ($cacheFactory) {
	return $cacheFactory('mainmenu_data')
})

enduro_admin_app.factory('content_service', function user_service ($http, url_config, $cookies, menu_cache, $q, user_service, $rootScope) {
	var content_service = {}

	content_service.get_cms_list = function (username, password) {

		if (menu_cache.get('mainmenu_data')) {
			var deferred = $q.defer()
			deferred.resolve(menu_cache.get('mainmenu_data'))
			return deferred.promise
		}

		return $http.get(url_config.get_base_url() + 'get_cms_list', {params: {sid: $cookies.get('sid')}})
			.then(function (res) {
				menu_cache.put('mainmenu_data', res.data.data)
				if (res.data && res.data.success) {
					return res.data.data
				} else {
					console.log('error getting page list')
				}
			}, user_service.error)
	}

	content_service.get_content = function (page_path) {
		return $http.get(url_config.get_base_url() + 'get_cms', {params: {sid: $cookies.get('sid'), filename: page_path}})
			.then(function (res) {
				return res.data
			}, user_service.error)
	}

	content_service.save_content = function (page_path, content) {
		return $http.post(url_config.get_base_url() + 'save_cms', {sid: $cookies.get('sid'), content: content, filename: page_path})
			.then(function (res) {
				return $q.resolve(res)
			}, user_service.error)
	}

	content_service.get_globalized_options = function (globalizer_string) {

		const params = {
			params: {
				sid: $cookies.get('sid'),
				globalizer_string: '@@' + globalizer_string,
				page_path: $rootScope.current_page,
			}
		}

		return $http.get(url_config.get_base_url() + 'get_globalizer_options', params)
			.then(function (res) {
				return res.data
			}, user_service.error)
	}

	content_service.get_globalized_context = function (globalizer_string) {

		const params = {
			cache: true,
			params: {
				sid: $cookies.get('sid'),
				globalizer_string: globalizer_string,
				page_path: $rootScope.current_page,
			}
		}

		return $http.get(url_config.get_base_url() + 'get_globalized_context', params)
			.then(function (res) {
				return res.data
			}, user_service.error)
	}

	content_service.add_page = function (new_pagename, generator) {
		return $http.get(url_config.get_base_url() + 'add_page', {params: {sid: $cookies.get('sid'), new_pagename: new_pagename, generator: generator}})
	}

	content_service.get_application_settings = function (new_pagename, generator) {
		return $http.get(url_config.get_base_url() + 'get_application_settings', {})
	}

	content_service.get_temp_page = function (page_path, content) {
		return $http.post(url_config.get_base_url() + 'get_temp_page', {sid: $cookies.get('sid'), content: content, filename: page_path})
			.then(function (res) {
				return $q.resolve(res)
			}, user_service.error)
	}

	// * ———————————————————————————————————————————————————————— * //
	// * 	delete pages
	// * ———————————————————————————————————————————————————————— * //
	content_service.delete_page = function (pagename) {
		return $http.get(url_config.get_base_url() + 'delete_page', {params: {sid: $cookies.get('sid'), pagename: pagename}})
	}

	// * ———————————————————————————————————————————————————————— * //
	// * 	get outstanding changes
	// * ———————————————————————————————————————————————————————— * //
	content_service.update_outstanding_changes = function () {
		return $http.get(url_config.get_api_url('get_outstanding_changes'), { params: { sid: $cookies.get('sid') } })
			.then(function (res) {
				$rootScope.outstanding_changes = res.data
			}, function (err) {
				console.log(err)
			})
	}

	// * ———————————————————————————————————————————————————————— * //
	// * 	clean
	// * 	removes all values while keeping the structure of the object
	// *
	// * 	@param item {object} - object to be cleaned
	// * 	return object - object without string values
	// * ———————————————————————————————————————————————————————— * //
	content_service.clean = function (item) {
		var self = this

		for (i in item) {
			if (typeof item[i] === 'string' && i[0] != '$') {
				item[i] = ''
			}

			if (typeof item[i] === 'object') {
				self.clean(item[i])
			}
		}
		return item
	}

	return content_service
})
