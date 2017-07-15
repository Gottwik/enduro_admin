enduro_admin_app.factory('random_service', function random_service () {
	var random_service = {}

	random_service.randint = function (range_start, range_end) {
		return Math.floor(Math.random() * (range_end - range_start) + range_start)
	}

	return random_service
})
