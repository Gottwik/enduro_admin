// * ———————————————————————————————————————————————————————— * //
// * 	pagesplit controller
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.controller('pagesplit_controller', ['$scope', '$routeParams', function ($scope, $routeParams) {

	console.log($routeParams.page_path)
	$routeParams.page_path = $routeParams.page_path || 'index'

	$scope.inner_page = '/admin/assets/js/views/cms_edit.html'
}])
