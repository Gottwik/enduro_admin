enduro_admin_app.controller('page-search-controller', ['$scope', '$rootScope', function($scope, $rootScope) {

	var options = {
		caseSensitive: false,
		shouldSort: true,
		tokenize: false,
		threshold: 0.6,
		location: 0,
		distance: 100,
		maxPatternLength: 32,
		keys: [
			"name",
		]
	};

	var fuse = new Fuse($rootScope.flat_cmslist, options)

	$scope.pagesearch_string = ''

	$scope.$watch('pagesearch_string', function() {
		$scope.search_shown = $scope.pagesearch_string.length > 0

		filter_by_distance()
	})

	$scope.arrowpress = function(e) {
		console.log(e.keyCode)
		if(e.keyCode == 38) {

		}

		if(e.keyCode == 40) {
			console.log('asd')
		}
	}

	function filter_by_distance() {
		$scope.page_search_results = fuse.search($scope.pagesearch_string)
	}

}])