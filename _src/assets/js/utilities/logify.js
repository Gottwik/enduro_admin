$( document ).ready(function() {
		console.log($('.logify'))
	$('.logify').each(function() {
		var element = $(this)
		var actions = $(this).data('logify-actions')
		var type = $(this).data('logify-type')

		element.on(actions, logify_actions[type])
	})
});

var logify_actions = {}

logify_actions['color-by-typing'] = function() {
	console.log('color-by-typing')
}