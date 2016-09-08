// * ———————————————————————————————————————————————————————— * //
// * 	font awesome controller
// * 	fa_control lets user pick from font awesome icons
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.controller('fa_controller', ['$scope', '$rootScope', 'modal_service', function ($scope, $rootScope, modal_service) {

	$scope.open_fa_chooser = function () {

		// opens up the fa_modal window
		modal_service.open('fa_modal')

		// icon_chosen event is fired upon choosing an icon
		// this event is triggered by inline onclick in the fa choosing template
		$('body').one('icon_chosen', function (event, data) {

			// closes modal window
			modal_service.close()

			$rootScope.$apply()

			// sets the field to chosen icon
			$scope.context[$scope.terminatedkey] = data.icon
		})
	}

}])
