// * ———————————————————————————————————————————————————————— * //
// * 	enduro progressbar directive
// *
// *	sets width based on model variable
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app
.directive('enprogressbar', ['$document', '$rootScope', function ($document, $rootScope) {
	return {
		replace: true,
		link: function (scope, element, attr) {

			var progress = $('<div>').addClass('progress')
			$(element).addClass('progressbar').append(progress)

			scope.$watch('progress', function (progress) {
				scope.calculated_progress = progress
				console.log(scope.calculated_progress)
				window.requestAnimationFrame(function () {
					console.log('aa')
					$(element).find('.progress').css('width', scope.calculated_progress + '%')
				})
			})
		}
	}
}])
