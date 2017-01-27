// * ———————————————————————————————————————————————————————— * //
// * 	enduro progressbar
// *
// *	enables list items to be reordered by dragging
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app
.directive('enProgressbar', function ($document, $rootScope, $q, random_service) {
	return {
		link: function (scope, element, attr) {
			element.addClass('progressbar')

			var value_element = $('<span>').addClass('value')

			element.append(value_element)

			element[0].start = function () {
				value_element.animate({
					width: '3%'
				}, random_service.randint(50, 200))
			}

			element[0].finish = function () {
				return $q(function (resolve, reject) {
					value_element.animate({
						width: '100%'
					}, random_service.randint(200, 1000), function () {
						resolve()
					})
				})
			}
		}
	}
})
