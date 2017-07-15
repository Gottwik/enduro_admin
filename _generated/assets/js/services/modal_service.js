// * ———————————————————————————————————————————————————————— * //
// * 	modal service
// *
// *	handles opening and closing of modal window
// *	todo: refactor all modal interaction throughout the project to this service
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.factory('modal_service', function modal_service ($rootScope, $q) {
	var modal_service = {}

	modal_service.close = function () {
		$('body').removeClass('modal-open')
		$rootScope.modal = ''
	}

	modal_service.open = function (modal_name) {
		return $q(function (resolve, reject) {

			var modal_fullpath = '/admin/modals/' + modal_name + '/index.html'

			$rootScope.modal = modal_fullpath
			$rootScope.$on('$includeContentLoaded', function (event, template_name) {
				if (template_name == modal_fullpath) {
					resolve()
				}
			})
		})
	}

	return modal_service
})
