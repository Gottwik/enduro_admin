enduro_admin_app
.directive('enDraggable', ['$document', function($document) {
	return {
		link: function(scope, element, attr) {
			var startX = 0, startY = 0, x = 0, y = 0;

			element.find('.array-move-control').on('mousedown', function(event) {
				// Prevent default dragging of selected content
				event.preventDefault();
				startX = event.pageX - x;
				startY = event.pageY - y;
				$document.on('mousemove', mousemove);
				$document.on('mouseup', mouseup);
			});

			function mousemove(event) {
				y = event.pageY - startY;
				x = event.pageX - startX;

				element.addClass('dragging')

				element.css({
					top: y + 'px',
					left:  x + 'px'
				});

			}

			function mouseup() {
				$document.off('mousemove', mousemove);
				$document.off('mouseup', mouseup);

				element.removeClass('dragging')


				element.css({
					top: 'auto',
					left:  'auto'
				});
				startX = 0, startY = 0, x = 0, y = 0;

				scope.reorder()
			}
		}
	};
}]);