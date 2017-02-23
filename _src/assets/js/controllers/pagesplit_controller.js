// * ———————————————————————————————————————————————————————— * //
// * 	pagesplit controller
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.controller('pagesplit_controller', ['$scope', '$routeParams', function ($scope, $routeParams) {

	// redirect to index context file in case none is specified
	// this is a possible change point for creating an dashboard page
	$routeParams.page_path = $routeParams.page_path || 'index'

	$scope.inner_page = '/admin/assets/js/views/cms_edit.html'
}])
