// * ———————————————————————————————————————————————————————— * //
// * 	preloader service
// *	handles preloading of the page
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.factory('preloader_service', ['$rootScope', function preloader_service ($rootScope) {
	var preloader_service = {}
	$rootScope.preloaded_objects_count = 0

	preloader_service.clear = function () {
		$rootScope.preloaded_objects_count = 0
		$rootScope.is_currently_preloading = false
	}

	preloader_service.add_to_be_loaded_object = function () {
		// if ($rootScope.preloaded_objects_count == 0) {
		// 	console.time('rendering')
		// }

		$rootScope.preloaded_objects_count++
		//$rootScope.is_currently_preloading = true
	}

	preloader_service.remove_to_be_loaded_object = function () {
		$rootScope.preloaded_objects_count--
		if ($rootScope.preloaded_objects_count <= 1) {
			// console.timeEnd('rendering')
			$rootScope.is_currently_preloading = false
		}
	}

	return preloader_service
}])
