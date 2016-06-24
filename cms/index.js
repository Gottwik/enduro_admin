{
	$modules_hidetitle: true,
	$modules_size: 12,
	$modules_templatitator: '@@global.modules',
	modules: [
		{
			$module_type_type: 'title',
			module_type: 'jumbotron',
			$context_expander: true,
			$context_noframe: true,
			context: {
				$background_img_type: 'image',
				$background_img_label: 'Background image',
				background_img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1_slider_1.jpg',
				$background_video_type: 'image',
				background_video: '',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: '47',
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000000',
				$jumbotext_type: 'textarea',
				jumbotext: ''
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'jumbotron',
			$context_expander: true,
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
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/1-big.jpg',
							dark: false,
							tagline: 'Job posting',
							title: 'Digital Intern',
							$text_type: 'textarea',
							text: 'And of in characters a suburban and fancy 1995 with In the.',
							button: 'Read more',
							button_link: '/gosomewhere',
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/2-replace-for-video.jpg',
							dark: false,
							tagline: 'Job posting',
							title: 'Digital Intern',
							$text_type: 'textarea',
							text: 'And of in characters a suburban and fancy 1995 with In the.',
							button: 'Read more',
							button_link: '/gosomewhere',
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/3.jpg',
							dark: false,
							tagline: 'Job posting',
							title: 'Digital Intern',
							$text_type: 'textarea',
							text: 'And of in characters a suburban and fancy 1995 with In the.',
							button: 'Read more',
							button_link: '/gosomewhere',
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/4.jpg',
							dark: false,
							tagline: 'Job posting',
							title: 'Digital Intern',
							$text_type: 'textarea',
							text: 'And of in characters a suburban and fancy 1995 with In the.',
							button: 'Read more',
							button_link: '/gosomewhere',
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/5.jpg',
							dark: false,
							tagline: 'Job posting',
							title: 'Digital Intern',
							$text_type: 'textarea',
							text: 'And of in characters a suburban and fancy 1995 with In the.',
							button: 'Read more',
							button_link: '/gosomewhere',
						}
					},
				]
			}
		}
	]
}