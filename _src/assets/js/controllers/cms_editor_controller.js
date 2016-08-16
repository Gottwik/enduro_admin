enduro_admin_app.controller('cms-editor-controller', ['$scope', '$rootScope', '$routeParams', 'content_service', 'culture_service', 'hotkeys',
	function($scope, $rootScope, $routeParams, content_service, culture_service, hotkeys) {

	// Get pages
	content_service.get_content($routeParams.page_path)
		.then(function(res){
			$scope = angular.extend($scope, res)
		}, function() {})

	culture_service.get_cultures()
		.then(function(res){
			$scope.cultures = res;
			$scope.current_culture = res[0] || ''
			$scope.on_default_culture = $scope.current_culture == res[0]
		}, function() {})

	$scope.change_culture = function(obj) {
		$scope.current_culture = $(obj.target).data('culture')
		$scope.on_default_culture = $(obj.target).data('culture') == $scope.cultures[0]
	}

	$scope.publish = function(e) {
		$scope.publishing = true

		content_service.save_content($routeParams.page_path, $scope.context)
			.then(() => {
				$scope.publishing = false
			}, () => {
				$scope.publishing = false
			})
	}

	$scope.temp = function(e) {
		$scope.temping = true

		content_service.get_temp_page($routeParams.page_path, $scope.context)
			.then((temp_destination_path) => {

				$scope.temping = false
				if($scope.tempwindow && $scope.tempwindow.location.hostname) {
					$scope.tempwindow.focus()
					$scope.tempwindow.location = '/' + temp_destination_path.data
				} else {
					$scope.tempwindow = window.open('/' + temp_destination_path.data, 'enduro temp window')
				}

			}, () => {
				$scope.temping = false
			})
	}

	// decides if the application is demo
	$scope.is_demo = $rootScope.user.tags && $rootScope.user.tags.indexOf('demo') + 1

	// Helper functions
	$scope.isString = function(item) { return angular.isString(item) }
	$scope.isNumber = function(item) { return angular.isNumber(item) }
	$scope.isArray = function(item) { return angular.isArray(item) }
	$scope.isBoolean = function(item) { return typeof(item) === "boolean" }
	$scope.isObject = function(item) {
		if(typeof item === 'object') {
			if(angular.isArray(item)) {
				return false
			}
			return true
		}
		return false
	}

	// adding hotkeys
	hotkeys.bindTo($scope)
	.add({
		// publish hotkey
		combo: ['mod+s', 'mod+enter'],
		description: 'Publish current page',
		allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
		callback: function(e) {
			e.preventDefault()
			$scope.publish()
		}
	})
	.add({
		// temp hotkey
		combo: ['mod+d', 'mod+t'],
		description: 'Temp current page',
		allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
		callback: function(e) {
			e.preventDefault()
			$scope.temp()
		}
	})
	.add({
		// temp hotkey
		combo: ['mod+p'],
		description: 'Search for page',
		allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
		callback: function(e) {
			e.preventDefault()
			$('.page-search-input').focus()
		}
	})

}])