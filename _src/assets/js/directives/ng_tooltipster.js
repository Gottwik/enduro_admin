// * ———————————————————————————————————————————————————————— * //
// * 	angular wrapper for tooltipster (https://github.com/iamceege/tooltipster)
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app
	.directive('ngtooltipster', [function () {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {

				var content = $(element).data('title')

				if (scope.terminated_context && scope.terminated_context.info) {
					content = scope.terminated_context.info
				}

				$(element).tooltipster({
					content: content,
					delay: 0,
					animationDuration: 0,
				})
			}
		}
	}])
