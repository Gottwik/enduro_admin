// * ———————————————————————————————————————————————————————— * //
// * 	attaches time picker to datetime control
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app
	.directive('enTimePicker', [function () {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {
				console.log('..')
				element = $(element)
				element.pickatime({
					formatSubmit: 'HH:i:00',
					onSet: function () {
						scope.context['$' + scope.terminatedkey + '_value'] = element.siblings('input').val()
					}
				})
			}
		}
	}])
