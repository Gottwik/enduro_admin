// * ———————————————————————————————————————————————————————— * //
// * 	attaches date and time picker to datetime control
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app
	.directive('enDatePicker', [function () {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {

				element = $(element)

				element.find('.datetime_date').pickadate()
				element.find('.datetime_time').pickatime()
			}
		}
	}])
