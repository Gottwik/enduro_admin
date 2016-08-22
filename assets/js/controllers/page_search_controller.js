// * ———————————————————————————————————————————————————————— * //
// * 	page search controller
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.controller('page_search_controller', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {

	var options = {
		caseSensitive: false,
		shouldSort: true,
		tokenize: false,
		threshold: 0.6,
		location: 0,
		distance: 100,
		maxPatternLength: 32,
		keys: [
			'name',
			'fullpath',
		]
	}

	var fuse = new Fuse($rootScope.flat_cmslist, options)

	$scope.pagesearch_string = ''
	$scope.active_index = 0

	$scope.$watch('pagesearch_string', function () {
		$scope.search_shown = $scope.pagesearch_string.length > 0

		if ($scope.pagesearch_string.length) {
			filter_by_distance()
		}
	})

	$scope.arrowpress = function (e) {

		// if (!page_search_results) {
		// 	return false
		// }

		// arrow up
		if (e.keyCode == 38) {
			$scope.active_index = Math.max(0, $scope.active_index - 1)
		}

		// arrow down
		if (e.keyCode == 40) {
			$scope.active_index = Math.min($scope.page_search_results.length, $scope.active_index + 1)
		}

		// enter key
		if (e.keyCode == 13) {
			$location.path('cms' + $scope.page_search_results[$scope.active_index].fullpath)
		}
	}

	function filter_by_distance () {
		$scope.page_search_results = fuse.search($scope.pagesearch_string)
	}

}])
