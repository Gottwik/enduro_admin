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
				module_name: 'Intro',
				social: true,
				$background_img_type: 'image',
				background_img: '/assets/img/jumbos/road.jpg',
				$background_video_type: 'image',
				background_video: '/assets/img/videos/hq.mp4',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: 9,
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000',
				dark: true,
				$columns_hidetitle: true,
				$columns_templatitator: '@@global.simpleton_modules',
				$columns_min: 1,
				$columns_max: 2,
				columns: [
					{
						$simpleton_type_hidden: true,
						simpleton_type: 'simpleton_text',
						$context_noframe: true,
						context: {
							header: '',
							title: '',
							$text_type: 'textarea',
							text: '',
							purelink: ''
						}
					}
				]
			}
		},

		squarebox: {
			$module_type_hidden: true,
			module_type: 'squarebox',
			$context_noframe: true,
			context: {
				$squares_hidetitle: true,
				$squares_templatitator: '@@global.squares',
				squares: [
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: '/assets/img/boxcards/geraldlookingatthings.jpg',
							dark: false,
							tagline: 'Job posting',
							title: 'Digital Intern',
							text: 'And of in characters a suburban and fancy 1995 with In the.',
							button: 'Read more'
						}
					},
				]
			}
		}
	}
}