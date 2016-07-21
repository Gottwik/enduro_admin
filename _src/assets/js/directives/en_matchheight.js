// * ———————————————————————————————————————————————————————— * //
// * 	enduro draggable directive
// *
// *	enables list items to be reordered by dragging
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app
.directive('enMatchheight', ['$document', function($document) {
	return {
		link: function(scope, element, attr) {
			scope.$watch(
				function () {
					return $(element).html()
				},
				function () {
					var maxheight = element.children().toArray()
						.map(function(element, index) {
							return $(element).outerHeight()
						})
						.reduce(function(prev, next) {
							return Math.max(prev, next)
						})
					console.log(maxheight)
					element.children().css('height', maxheight)
				}
			)
		}
	};
}]);