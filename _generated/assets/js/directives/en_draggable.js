// * ———————————————————————————————————————————————————————— * //
// * 	enduro draggable directive
// *
// *	enables list items to be reordered by dragging
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app
.directive('enDraggable', ['$document', function ($document) {
	return {
		link: function (scope, element, attr) {

			// stores initial dragging location
			var start_x = 0
			var start_y = 0

			// stores current mouse/dragging element location
			var x = 0
			var y = 0

			// stores list of array items
			var siblings

			// stores list of array item positions
			var sibling_positions

			// stores final dragging action/shift
			var shift_from = 0
			var shift_to = 0

			// mousedown event
			element.find('.array-move-control').on('mousedown', function (event) {
				// Prevent default dragging of selected content
				event.preventDefault()

				// sets start position at start of dragging
				start_x = event.pageX - x
				start_y = event.pageY - y

				// register move and up events
				$document.on('mousemove', mousemove)
				$document.on('mouseup', mouseup)
			})

			// mousemove event
			function mousemove (event) {
				// stores array items by directive attribute
				siblings = element.parent().find('> [en-draggable]').toArray()

				// calculate current relative position
				y = event.pageY - start_y
				x = event.pageX - start_x

				// if sibling positions are not set set it now and only once
				if (!sibling_positions) {
					sibling_positions = siblings.map(function (item) {
						return $(item).position()
					})
				}

				// add dragging class to the element that is being dragged
				element.addClass('dragging')

				// set relative position to the element to move it with mouse cursor
				element.css({
					top: y + 'px',
					left: x + 'px'
				})

				// store element position
				var element_position = element.position()

				// iterate array item and find the closest to the dragged element
				var min_distance = Number.MAX_SAFE_INTEGER
				for (index in siblings) {

					var current_distance

					if (siblings[index] == element[0]) {
						shift_from = parseInt(index)
					}

					current_distance = distance(element_position, sibling_positions[index])
					if (current_distance < min_distance) {
						shift_to = parseInt(index)
						min_distance = current_distance
					}
				}

				// shift the items visually
				visual_shift(shift_from, shift_to)

			}

			// mouse up event - dragging is finished
			function mouseup () {

				// disable mouse move and up events
				$document.off('mousemove', mousemove)
				$document.off('mouseup', mouseup)

				// remove dragging class
				element.removeClass('dragging')

				// set all items position to auto - angular will reposition the elements
				for (s in siblings) {
					$(siblings[s]).css({
						top: 'auto',
						left: 'auto'
					})
				}

				// reset the mouse tracking variables
				start_x = 0
				start_y = 0
				x = 0
				y = 0

				// empty sibling positions to be redefined based on new positions
				sibling_positions = undefined

				// shift the items in the scope
				scope.reorder(shift_from, shift_to)
			}

			// moves the items visually as the element is being dragged
			function visual_shift () {

				// iterate all elements
				for (var i = 0; i < siblings.length; i++) {

					// continue if element is same as the dragged element
					if (i == shift_from) {
						continue
					}

					// continue if elements are not affected by the shift
					if (i < Math.min(shift_from, shift_to)) {
						moveto(i, i)
						continue
					}
					if (i > Math.max(shift_from, shift_to)) {
						moveto(i, i)
						continue
					}

					// decide whether to shift upward or downward
					var multi = shift_from > shift_to ? 1 : -1

					// actually shifts the element
					moveto(i, i + multi)
				}
			}

			// calculates distance between two points
			function distance (a, b) {
				return Math.sqrt(Math.pow(Math.abs(a.top - b.top), 2) + Math.pow(Math.abs(a.left - b.left), 2))
			}

			// moves element a to where b is
			function moveto (a, b) {
				$(siblings[a]).css({
					top: sibling_positions[b].top - sibling_positions[a].top,
					left: sibling_positions[b].left - sibling_positions[a].left
				})
			}
		}
	}
}])
