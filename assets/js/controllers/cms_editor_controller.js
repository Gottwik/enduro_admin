// * ———————————————————————————————————————————————————————— * //
// * 	cms editor controller
// *	main controller for cms editor
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.controller('cms-editor-controller', ['$scope', '$rootScope', '$routeParams', 'content_service', 'culture_service', 'hotkeys',
	function ($scope, $rootScope, $routeParams, content_service, culture_service, hotkeys) {

		// get page specified in route
		content_service.get_content($rootScope.current_page)
			.then(function (res) {
				$scope.deletable = res.deletable
				// extend scope with the fetched context
				$scope = angular.extend($scope, res)
			}, function () {})

		content_service.update_outstanding_changes()

		// gets all available cultures
		culture_service.get_cultures()
			.then(function (res) {

				// store the cultures
				$scope.cultures = res

				// set first culture
				$scope.current_culture = res[0] || ''

				// determine if the default culture is set
				$scope.on_default_culture = $scope.current_culture == res[0]

				// will create hotkeys to switch between cultures with cmd+1, cmd+2...
				for (var culture_index in _.range($scope.cultures.length)) {
					(function add_culture_switch_hotkey (culture_index) {
						hotkeys_handler.add({
							// switch cultures hotkey
							combo: ['mod+' + culture_index],
							description: 'switch culture',
							allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
							callback: function (e) {
								e.preventDefault()
								$scope.change_culture_with_culture_slug($scope.cultures[culture_index - 1])
							}
						})
					})(culture_index)
				}

			}, function () {})

		// * ———————————————————————————————————————————————————————— * //
		// * 	change culture
		// *	will swtich culture to specified
		// *
		// *	@param obj {$event} - event initializing the culture switch
		// *	returns nothing, just switches the culture
		// * ———————————————————————————————————————————————————————— * //
		$scope.change_culture = function (obj) {
			var self = this

			// gets data-culture from the element initializing the switch
			var selected_culture = $(obj.target).data('culture')

			self.change_culture_with_culture_slug(selected_culture)
		}

		$scope.change_culture_with_culture_slug = function (culture_slug) {

			// sets current culture and true/false whether page is on default culture
			$scope.current_culture = culture_slug
			$scope.on_default_culture = culture_slug == $scope.cultures[0]
		}

		// * ———————————————————————————————————————————————————————— * //
		// * 	change culture
		// *	saves context
		// *
		// *	returns nothing
		// * ———————————————————————————————————————————————————————— * //
		$scope.publish = function () {
			$scope.publishing = true

			content_service.save_content($rootScope.current_page, $scope.context)
				.then(function () {
					content_service.update_outstanding_changes()
					$scope.publishing = false
				}, function () {
					console.log('something went wrong with saving the data')
					$scope.publishing = false
				})
		}

		// * ———————————————————————————————————————————————————————— * //
		// * 	change culture
		// *	generates temp page out of current context
		// *
		// *	returns nothing
		// * ———————————————————————————————————————————————————————— * //
		$scope.temp = function () {
			$scope.temping = true

			if (!$scope.tempwindow || !$scope.tempwindow.location.hostname) {
				$scope.tempwindow = window.open()
			}

			content_service.get_temp_page($rootScope.current_page, $scope.context)
				.then(function (temp_destination_path) {

					$scope.temping = false
					$scope.tempwindow.focus()
					$scope.tempwindow.location = '/' + temp_destination_path.data

				}, function () {
					$scope.temping = false
				})
		}

		// * ———————————————————————————————————————————————————————— * //
		// * 	delete current page
		// *	returns nothing
		// * ———————————————————————————————————————————————————————— * //
		$scope.delete_current_page = function () {
			content_service.delete_page($rootScope.current_page)
				.then(function (res) {
					console.log(res)
				})

			// delete page from the cmslist
			// console.log($rootScope.cmslist)
		}

		// decides if the application is demo
		$scope.is_demo = $rootScope.user.tags && $rootScope.user.tags.indexOf('demo') + 1

		// Helper functions
		$scope.isString = function (item) { return angular.isString(item) }
		$scope.isNumber = function (item) { return angular.isNumber(item) }
		$scope.isArray = function (item) { return angular.isArray(item) }
		$scope.isBoolean = function (item) { return typeof (item) === 'boolean' }
		$scope.isObject = function (item) {
			if (typeof item === 'object') {
				if (angular.isArray(item)) {
					return false
				}
				return true
			}
			return false
		}

		// adding hotkeys
		var hotkeys_handler = hotkeys.bindTo($scope)

		hotkeys_handler
			.add({
				// publish hotkey
				combo: ['mod+s', 'mod+enter'],
				description: 'Publish current page',
				allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
				callback: function (e) {
					e.preventDefault()
					$scope.publish()
				}
			})
			.add({
				// temp hotkey
				combo: ['mod+d', 'mod+t'],
				description: 'Temp current page',
				allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
				callback: function (e) {
					e.preventDefault()
					$scope.temp()
				}
			})
			.add({
				// search for page hotkey
				combo: ['mod+p'],
				description: 'Search for page',
				allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
				callback: function (e) {
					e.preventDefault()
					$('.page-search-input').focus()
				}
			})
			.add({
				// search for page hotkey
				combo: ['mod+l'],
				description: 'log context',
				callback: function (e) {
					e.preventDefault()
					console.log($scope.context)
				}
			})

	}])
