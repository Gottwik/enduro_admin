enduro_admin_app
.directive('enDraggable', ['$document', function($document) {
	return {
		link: function(scope, element, attr) {
			var startX = 0, startY = 0, x = 0, y = 0;

			var siblings
			var sibling_positions
			var shift_from = 0
			var shift_to = 0

			element.find('.array-move-control').on('mousedown', function(event) {
				// Prevent default dragging of selected content
				event.preventDefault();
				startX = event.pageX - x;
				startY = event.pageY - y;
				$document.on('mousemove', mousemove);
				$document.on('mouseup', mouseup);
			});

			function mousemove(event) {
				siblings = element.parent().find('> [en-draggable]').toArray()

				y = event.pageY - startY;
				x = event.pageX - startX;

				if(!sibling_positions) {
					sibling_positions = siblings.map(function(item) {
						return $(item).position()
					})
				}

				element.addClass('dragging')

				element.css({
					top: y + 'px',
					left:  x + 'px'
				});

				var element_position = element.position()
				var min_distance = Number.MAX_SAFE_INTEGER
				for(index in siblings) {

					var current_distance

					if(siblings[index] == element[0]) {
						shift_from = parseInt(index)
					}

					current_distance = distance(element_position, sibling_positions[index])
					if(current_distance < min_distance) {
						shift_to = parseInt(index)
						min_distance = current_distance
					}
				}

				visual_shift(shift_from, shift_to)
			}

			function mouseup() {
				$document.off('mousemove', mousemove);
				$document.off('mouseup', mouseup);

				element.removeClass('dragging')

				for(s in siblings) {
					$(siblings[s]).css({
						top: 'auto',
						left: 'auto'
					});
				}

				// moveto(shift_from, shift_to)

				startX = 0, startY = 0, x = 0, y = 0;

				sibling_positions = undefined

				scope.reorder(shift_from, shift_to)
			}

			function visual_shift() {

				for(var i = 0; i < siblings.length; i++) {

					if(i == shift_from) {
						continue
					}

					if(i < Math.min(shift_from, shift_to)) {
						moveto(i, i)
						continue
					}

					if(i > Math.max(shift_from, shift_to)) {
						moveto(i, i)
						continue
					}

					var multi = shift_from > shift_to ? 1 : -1

					moveto(i, i + multi)
				}
			}

			function distance(a, b) {
				return Math.sqrt( Math.pow(Math.abs(a.top - b.top), 2) + Math.pow(Math.abs(a.left - b.left), 2) )
			}

			function moveto(a, b) {

				$(siblings[a]).css({
					top: sibling_positions[b].top - sibling_positions[a].top,
					left: sibling_positions[b].left - sibling_positions[a].left
				});
			}
		}
	};
}]);