// * ———————————————————————————————————————————————————————— * //
// * 	addpage controller
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app.controller('addpage_controller', function ($scope, $rootScope, content_service, format_service, $location, modal_service) {

	// add focus to page name input on opening the modal
	$('.add_page_modal input.page_name').focus()

	// * ———————————————————————————————————————————————————————— * //
	// * 	addpage
	// * ———————————————————————————————————————————————————————— * //
	$scope.addpage = function () {

		// closes the modal
		modal_service.close()

		var slugged_newname = format_service.slug($scope.new_pagename)
		content_service.add_page(slugged_newname, $rootScope.adding_generator.fullpath.split('/').slice(2, -1)[0])
			.then(function () {
				add_page_to_cmslist($rootScope.cmslist, $rootScope.adding_generator.fullpath.split('/').slice(1, -1), slugged_newname)
			}, function (err) {
				console.log('adding page failed', err)
			})
	}

	function add_page_to_cmslist (cmslist, path, new_pagename) {
		if (path.length == 1) {
			// try to get template which shares the name of the folder
			var newpage = angular.copy(cmslist[path[0]][path[0]])

			// if it doesnt work duplicate the first page
			if (!newpage) {
				newpage = angular.copy(get_first_cms_page(cmslist[path[0]]))
			}

			newpage.name = format_service.deslug(new_pagename)
			newpage.page_slug = new_pagename
			newpage.fullpath = newpage.fullpath.split('/').slice(0, -1).join('/') + '/' + format_service.slug(new_pagename)
			newpage.hidden = false
			cmslist[path[0]][new_pagename] = newpage

			$location.path('cms' + newpage.fullpath)

			$rootScope.cmslist = cmslist

		} else {
			add_page_to_cmslist(cmslist, path.splice(1), new_pagename)
		}
	}

	function get_first_cms_page (object) {
		for (o in object) {
			if (typeof object[o] == 'object') {
				return object[o]
			}
		}

		// return empty object if there are no objects
		return {}
	}

})
