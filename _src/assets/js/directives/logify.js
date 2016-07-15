// * ———————————————————————————————————————————————————————— * //
// * 	animates logo on certain actions
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app
	.directive('logify', [function() {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {

				var logify_actions = {}

				var actions = $(element).data('logify-actions')
				var type = $(element).data('logify-type')

				$(element).keydown(function() {
					$('#enduro-logo').addClass(type)

					if(type) {
						logify_actions[type]()
					} else {
						randomProperty(logify_actions)()
					}
				})

				var triangle_index = 0

				// * ———————————————————————————————————————————————————————— * //
				// * 	actions
				// * ———————————————————————————————————————————————————————— * //
				logify_actions['color-by-typing'] = function() {

					var random_color = random_shade_of_grey()

					$('#polygon-cut')
						.find('#part-' + (triangle_index++ % 6 + 1))
						.css('fill', random_color)
						.css('stroke', random_color)
				}

				logify_actions['expand-triangle'] = function() {
					$('#polygon-cut')
						.find('#part-' + (triangle_index++ % 6 + 1))
						.css('transform', 'scale(' + (1.0 + 0.1 * (Math.floor(triangle_index / 6 + 1) % 2)) + ')')
				}

				logify_actions['rotate'] = function() {
					$('#polygon-full')
						.css('transform', 'rotate(' + (30 * ++triangle_index) + 'deg)')
				}


				// * ———————————————————————————————————————————————————————— * //
				// * 	color functions
				// * ———————————————————————————————————————————————————————— * //
				var colorlist_index = 0
				var colorlist = ['#cd3929', '#cf9385', '#efa96a', '#e0b59a', '#d8ede9', '#bbcecd', '#87a9d4', '#85acd4']
				function next_color_from_list(){
					return colorlist[colorlist_index++ % colorlist.length]
				}

				function random_pastel_color(){
					var r = (Math.round(Math.random()* 50) + 50).toString(16);
					var g = (Math.round(Math.random()* 50) + 50).toString(16);
					var b = (Math.round(Math.random()* 50) + 50).toString(16);
					return '#' + r + g + b;
				}

				function random_shade_of_grey(){
					var r = (Math.round(Math.random() * 127) + 30).toString(16);
					return '#' + r + r + r;
				}

				var randomProperty = function (obj) {
					var keys = Object.keys(obj)
					return obj[keys[ keys.length * Math.random() << 0]];
				};

			}
		}
	}]);