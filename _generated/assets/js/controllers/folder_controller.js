// * ———————————————————————————————————————————————————————— * //
// * 	folder controller
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.controller('folder_controller', ['$scope', 'menu_cache', '$rootScope', function ($scope, menu_cache, $rootScope) {

	$scope.cmslist = $scope.page

	$scope.folderclick = function () {
		$scope.cmslist.open = !$scope.cmslist.open
		menu_cache.put('mainmenu_data', $rootScope.cmslist.structured)
	}

	$scope.add_page = function () {
		$rootScope.adding_generator = $scope.page
		$rootScope.modal = '/admin/modals/add_page_modal/index.html'
	}

}])
