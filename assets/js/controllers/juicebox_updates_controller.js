// * ———————————————————————————————————————————————————————— * //
// * 	juicebox updates controller
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.controller('juicebox_updates_controller', function ($scope, $rootScope) {
	$scope.calculate_time_diff = function (file_diff) {
		return moment(file_diff.juicetimestamp1).to(file_diff.juicetimestamp2)
	}
})
