// * ———————————————————————————————————————————————————————— * //
// * 	pagesplit controller
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.controller('pagesplit_controller', function ($scope, $routeParams, $rootScope) {

	// redirect to index context file in case none is specified
	// this is a possible change point for creating an dashboard page
	$rootScope.current_page = $routeParams.page_path || 'index'

	$scope.inner_page = '/admin/assets/js/views/cms_edit.html'
})
