enduro_admin_app
	.directive('enPageSearchResults', [function() {
		return {
			restrict: 'A',
			templateUrl: '/admin/components/page_search/page_search_results',
			link: function(scope, element, attrs) {

				scope.$watch('pagesearch_string', function(){
					console.log('aa')

				})
			}
		}
	}]);