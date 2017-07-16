// * ———————————————————————————————————————————————————————— * //
// * 	enduro textarea directive
// *
// *	adds features to textarea
// * ———————————————————————————————————————————————————————— * //
enduro_admin_app
	.directive('enTextarea', ['$document', 'url_config', '$cookies', 'image_service', function ($document, url_config, $cookies, image_service) {
		return {
			link: function (scope, element, attr) {

				// make textarea ready for markdown input
				if (scope.terminated_context.markdown) {
					markdown_textarea(scope, element, attr)
				}

				function markdown_textarea (scope, element, attr) {

					// stores textarea
					var textarea = $(element).find('textarea')

					// add markdown class
					textarea.addClass('markdown')

					// allow tab character
					textarea.keydown(function (event) {
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
					textarea.on('drop', function (event) {
						event.preventDefault()

						var files = event.originalEvent.dataTransfer.files

						// just return if there are no files
						if (!files.length) {
							return
						}

						// picks the first file
						var file = files[0]

						upload_image_to_textarea(file)

					})

					textarea.on('paste', function (event) {
						// use event.originalEvent.clipboard for newer chrome versions
						var items = (event.clipboardData || event.originalEvent.clipboardData).items

						// find pasted image among pasted items
						var blob = null
						for (var i = 0; i < items.length; i++) {
							if (items[i].type.indexOf('image') === 0) {
								blob = items[i].getAsFile()
								blob.name = 'cp.' + blob.type.split('/').pop()
							}
						}

						// check if we actuall have some images or something
						if (blob != null) {
							upload_image_to_textarea(blob)
						}

					})

					function upload_image_to_textarea (file) {
						textarea.addClass('uploading')
						image_service.upload_image(file)
							.then(function (image_url) {
								textarea.removeClass('uploading')
								var markdown_link = '\n\n![](' + image_url + ')'
								textarea.val(textarea.val() + markdown_link)
							}, function () {
								textarea.removeClass('uploading')
							})
					}

				}
			}
		}
	}])
