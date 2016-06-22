{
	modules: {
		jumbotron: {
			$module_type_hidden: true,
			module_type: 'jumbotron',
			$context_noframe: true,
			context: {
				$background_img_type: 'image',
				$background_img_label: 'Background image',
				background_img: '',
				$background_video_type: 'image',
				background_video: '',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: 5,
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000',
				$jumbotext_type: 'textarea',
				jumbotext: ''
			}
		},

		simpleton: {
			$module_type_hidden: true,
			module_type: 'simpleton',
			$context_noframe: true,
			context: {
				$columns_min: 1,
				$columns_max: 2,
				columns: [
					{
						title: '',
						$text_type: 'textarea',
						text: ''
					}
				]
			}
		},
		squarebox: {
			$module_type_hidden: true,
			module_type: 'squarebox',
			$context_noframe: true,
			context: {
				squares: [
					{
						title: 'Card title',
						text: 'card text',
						$img_label: 'Background image',
						$img_type: 'image',
						img: '/assets/img/boxcards/geraldlookingatthings.jpg'
					},
					{
						title: 'Card title',
						text: 'card text',
						$img_label: 'Background image',
						$img_type: 'image',
						img: '/assets/img/boxcards/clay.jpg'
					},
					{
						title: 'Card title',
						text: 'card text',
						$img_label: 'Background image',
						$img_type: 'image',
						img: '/assets/img/boxcards/hqbike.jpg'
					},
					{
						title: 'Card title',
						text: 'card text',
						$img_label: 'Background image',
						$img_type: 'image',
						img: '/assets/img/boxcards/pencilbike.jpg'
					},
					{
						title: 'Card title',
						text: 'card text',
						$img_label: 'Background image',
						$img_type: 'image',
						img: '/assets/img/boxcards/clayready.jpg'
					}
				]
			}
		}
	}
}