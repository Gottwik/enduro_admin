// * ———————————————————————————————————————————————————————— * //
// * 	enduro textarea directive
// *
// *	adds features to textarea
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app
.directive('enTextarea', ['$document', 'Upload', 'url_config', '$cookies', function($document, Upload, url_config, $cookies) {
	return {
		link: function(scope, element, attr) {

			// make textarea ready for markdown input
			if(scope.terminated_context.markdown) {
				markdown_textarea(scope, element, attr)
			}

			function markdown_textarea(scope, element, attr) {

				// stores textarea
				var textarea = $(element).find('textarea')

				// add markdown class
				textarea.addClass('markdown')

				// allow tab character
				textarea.keydown(function(event) {
						console.log('asd')
					if (event.keyCode == 9) {
						// get caret position/selection
						var val = this.value
						var start = this.selectionStart
						var end = this.selectionEnd

						// set textarea value to: text before caret + tab + text after caret
						this.value = val.substring(0, start) + '\t' + val.substring(end)

						// put caret at right position again
						this.selectionStart = this.selectionEnd = start + 1

						return false
					}
				})

				// dropped file
				textarea.on('drop', function(event) {
					var files = event.originalEvent.dataTransfer.files

					// just return if there are no files
					if(!files.length) {
						return
					}

					// picks the first file
					var file = files[0]

					Upload.upload({
						url: url_config.get_base_url() + 'img_upload',
						data: {
							sid: $cookies.get('sid'),
							file: file
						}
					}).then(function (res) {
						if(res.data.success) {
							console.log('uploaded', res.data.image_url)
							textarea.val(textarea.val() + '![](' + res.data.image_url + ')')
						} else {
							console.log('upload not successfull')
						}
					}, function (res) {
						console.log('Error status: ' + res.status)
					}, function (evt) {
						var progress = parseInt(100.0 * evt.loaded / evt.total)

						console.log(progress)
					})

				})
			}
		}
	};
}]);