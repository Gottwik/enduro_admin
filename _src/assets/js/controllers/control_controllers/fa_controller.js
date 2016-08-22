// * ———————————————————————————————————————————————————————— * //
// * 	fa controller
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.controller('fa_controller', ['$scope', '$rootScope', function ($scope, $rootScope) {

	$scope.open_fa_chooser = function () {
		$rootScope.modal = '/admin/modals/fa_modal.html'
		$('body').one('icon_chosen', function (event, data) {
			$rootScope.modal = ''
			$('body').removeClass('modal-open')
			$rootScope.$apply()
			$scope.context[$scope.terminatedkey] = data.icon
		})
	}

}])
