// * ———————————————————————————————————————————————————————— * //
// * 	enduro draggable directive
// *
// *	enables list items to be reordered by dragging
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app
.directive('enModal', ['$document', '$rootScope', function ($document, $rootScope) {
	return {
		replace: true,
		link: function (scope, element, attr) {

			$('body').addClass('modal-open')

			// click on the modal overlay
			element.click(function (event) {
				if (event.target == element[0]) {
					close_self()
					scope.$apply()
				}
			})

			scope.close = function () {
				close_self()
			}

			// closes the modal
			function close_self () {
				$('body').removeClass('modal-open')
				$rootScope.modal = ''
			}
		}
	}
}])
