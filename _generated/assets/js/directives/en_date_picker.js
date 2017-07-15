// * ———————————————————————————————————————————————————————— * //
// * 	attaches date picker to datetime control
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app
	.directive('enDatePicker', [function () {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {

				element = $(element)
				element.pickadate({
					format: 'dddd, dd mmmm, yyyy',
					formatSubmit: 'yyyy-mm-dd',
					today: '',
					clear: '',
					close: '',
					onSet: function () {
						scope.context['$' + scope.terminatedkey + '_value'] = element.siblings('input').val()
					}
				})
			}
		}
	}])
