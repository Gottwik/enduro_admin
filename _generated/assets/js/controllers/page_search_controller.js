// * ———————————————————————————————————————————————————————— * //
// * 	page search controller
// *	enables quickly searching for pages
// *	uses fuse(https://github.com/krisk/fuse/) for fuzzy search
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.controller('page_search_controller', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {

	// options for fuse
	var fuse_options = {
		caseSensitive: false,
		shouldSort: true,
		threshold: 0.6,
		location: 0,
		distance: 100,
		maxPatternLength: 32,
		keys: [
			'name',
			'fullpath',
		]
	}

	// stores fuse
	var fuse

	// initialize fuse when cmslist gets set or changes
	$scope.$watch('$root.flat_cmslist', function () {
		if ($rootScope.flat_cmslist) {
			fuse = new Fuse($rootScope.flat_cmslist, fuse_options)
		}
	})

	$scope.pagesearch_string = ''
	$scope.active_index = 0

	$scope.$watch('pagesearch_string', function (new_value, old_value) {
		$scope.search_shown = $scope.pagesearch_string.length > 0

		if ($scope.pagesearch_string && $scope.pagesearch_string.length) {
			filter_by_distance()
		}
	})

	$scope.arrowpress = function (e) {

		// arrow up
		if (e.keyCode == 38) {
			$scope.active_index = Math.max(0, $scope.active_index - 1)
		}

		// arrow down
		if (e.keyCode == 40) {
			$scope.active_index = Math.min($scope.page_search_results.length - 1, $scope.active_index + 1)
		}

		// enter key
		if (e.keyCode == 13) {
			$location.path('cms' + $scope.page_search_results[$scope.active_index].fullpath)
		}

		// escape key
		if (e.keyCode == 27) {
			$scope.pagesearch_string = ''
		}
	}

	function filter_by_distance () {
		if (fuse) {
			$scope.page_search_results = fuse.search($scope.pagesearch_string)
		}
	}

}])
