// * ———————————————————————————————————————————————————————— * //
// * 	modal service
// *
// *	handles opening and closing of modal window
// *	todo: refactor all modal interaction throughout the project to this service
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.factory('modal_service', ['$rootScope', function modal_service ($rootScope) {
	var modal_service = {}

	modal_service.close = function () {
		$('body').removeClass('modal-open')
		$rootScope.modal = ''
	}

	modal_service.open = function (modal) {
		$rootScope.modal = '/admin/modals/' + modal + '.html'
	}

	return modal_service
}])
