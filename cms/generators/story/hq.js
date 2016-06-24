{
	$modules_hidetitle: true,
	$modules_size: 12,
	$modules_templatitator: '@@global.modules',
	modules: [
		{
			$module_type_hidden: true,
			module_type: 'jumbotron',
			$context_noframe: true,
			context: {
				$background_img_type: 'image',
				$background_img_label: 'Background image',
				background_img: '/assets/img/jumbos/road.jpg',
				$background_video_type: 'image',
				background_video: '/assets/img/videos/hq.mp4',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: '71',
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000000',
				$jumbotext_type: 'textarea',
				jumbotext: 'This is a story about a challenge. About changing everything [we]{kiska} do, but not changing ourselves.'
			}
		},
		{
			$module_type_hidden: true,
			module_type: 'simpleton',
			$context_noframe: true,
			context: {
				module_name: 'Intro',
				social: true,
				$background_img_type: 'image',
				background_img: '',
				$background_video_type: 'image',
				background_video: '',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: 0,
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000',
				$columns_min: 1,
				$columns_max: 2,
				$columns_templatitator: '@@global.simpleton_modules',
				columns: [
					{
						$simpleton_type_hidden: true,
						simpleton_type: 'simpleton_text',
						$context_noframe: true,
						context: {
							header: '',
							title: 'We would [fail]{fail} had we just followed a trend and simply made a custom bike.',
							$text_type: 'textarea',
							text: 'Strip and mention philosophical between the in books broad and a education depicts countries philosophical between the in books broad and a education depicts countries philosophical between the in books broad and a education depicts countries and friendship copies see like tiger and to its for humorous philosopher him nearly named newspaper.',
							purelink: 'Send us an email'
						}
					}
				]
			}
		},
		{
			$module_type_hidden: true,
			module_type: 'jumbotron',
			$context_noframe: true,
			context: {
				$background_img_type: 'image',
				background_img: '/assets/img/jumbos/retrorider.jpg',
				screen: true,
				veil: true,
				jumbotext: 'Imagine the “Pioneers of Motocross” making a street bike. It’s madness, right?'
			}
		},
		{
			$module_type_hidden: true,
			module_type: 'simpleton',
			$context_noframe: true,
			context: {
				module_name: 'Custom',
				$background_img_type: 'image',
				background_img: '',
				$background_video_type: 'image',
				background_video: '',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: 0,
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000',
				$columns_min: 1,
				$columns_max: 2,
				$columns_templatitator: '@@global.simpleton_modules',
				columns: [
					{
						$simpleton_type_hidden: true,
						simpleton_type: 'simpleton_text',
						$context_noframe: true,
						context: {
							header: '',
							title: 'We would fail had we just followed a trend and simply made a custom bike.',
							$text_type: 'textarea',
							text: '',
							purelink: ''
						}
					},
					{
						$simpleton_type_hidden: true,
						simpleton_type: 'simpleton_text',
						$context_noframe: true,
						context: {
							header: '',
							title: '',
							$text_type: 'textarea',
							text: 'Strip and mention philosophical between the in books broad and a education depicts countries and friendship copies see like tiger and to its for humorous philosopher him nearly named newspaper.',
							purelink: ''
						}
					},
				]
			}
		},
		{
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
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: '/assets/img/boxcards/clay.jpg',
							dark: true,
							tagline: 'Job posting',
							title: 'Digital Intern',
							text: 'And of in characters a suburban and fancy 1995 with In the.',
							button: 'Read more'
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: '/assets/img/boxcards/hqbike.jpg',
							dark: false,
							tagline: 'Job posting',
							title: 'Digital Intern',
							text: 'And of in characters a suburban and fancy 1995 with In the.',
							button: 'Read more'
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: '/assets/img/boxcards/pencilbike.jpg',
							dark: false,
							tagline: 'Job posting',
							title: 'Digital Intern',
							text: 'And of in characters a suburban and fancy 1995 with In the.',
							button: 'Read more'
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: '/assets/img/boxcards/clayready.jpg',
							dark: false,
							tagline: 'Job posting',
							title: 'Digital Intern',
							text: 'And of in characters a suburban and fancy 1995 with In the.',
							button: 'Read more'
						}
					}
				]
			}
		},
		{
			$module_type_hidden: true,
			module_type: 'simpleton',
			$context_noframe: true,
			context: {
				module_name: 'Classic',
				$background_img_type: 'image',
				background_img: '',
				$background_video_type: 'image',
				background_video: '',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: 0,
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000',
				$columns_min: 1,
				$columns_max: 2,
				$columns_templatitator: '@@global.simpleton_modules',
				columns: [
					{
						$simpleton_type_hidden: true,
						simpleton_type: 'simpleton_text',
						$context_noframe: true,
						context: {
							header: '',
							title: 'We started with a classic and created a new definition of pioneer.',
							$text_type: 'textarea',
							text: 'And Set its daily between theologian 2,400 it philosopher height frequent series great tiger Bill 2010 follows a a the featured 45 broad named Calvin American cartoonist relationship cited copies.',
							purelink: ''
						},
					},
					{
						$simpleton_type_hidden: true,
						simpleton_type: 'simpleton_images',
						$context_noframe: true,
						context: {
							$imgs_size: 12,
							imgs: [
								{
									$img_type: 'image',
									img: '/assets/img/miniquads/minibike1.jpg'
								},
								{
									$img_type: 'image',
									img: '/assets/img/miniquads/minibike2.jpg'
								},
								{
									$img_type: 'image',
									img: '/assets/img/miniquads/minibike3.jpg'
								},
								{
									$img_type: 'image',
									img: '/assets/img/miniquads/minibike4.jpg'
								}
							]
						}
					},
				]
			}
		},
		{
			$module_type_hidden: true,
			module_type: 'jumbotron',
			$context_noframe: true,
			context: {
				$background_img_type: 'image',
				background_img: '/assets/img/jumbos/twohq.jpg',
				screen: true,
				veil: true
			}
		},
		{
			$module_type_hidden: true,
			module_type: 'simpleton',
			$context_noframe: true,
			context: {
				module_name: 'Success',
				$background_img_type: 'image',
				background_img: '',
				$background_video_type: 'image',
				background_video: '',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: 0,
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000',
				$columns_min: 1,
				$columns_max: 2,
				$columns_templatitator: '@@global.simpleton_modules',
				columns: [
					{
						$simpleton_type_hidden: true,
						simpleton_type: 'simpleton_text',
						$context_noframe: true,
						context: {
							header: '',
							title: 'Guess what? People like it! And, not just the ones you would expect (but that’s exactly what we expected).',
							$text_type: 'textarea',
							text: '',
							purelink: ''
						}
					},
				]
			}
		},
		{
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
							img: '/assets/img/boxcards/gqlogo.jpg',
							dark: false,
							tagline: 'Job posting',
							title: 'Digital Intern',
							text: 'And of in characters a suburban and fancy 1995 with In the.',
							button: 'Read more'
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: '/assets/img/boxcards/playboy.jpg',
							dark: false,
							tagline: 'Job posting',
							title: 'Digital Intern',
							text: 'And of in characters a suburban and fancy 1995 with In the.',
							button: 'Read more'
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: '/assets/img/boxcards/wired.jpg',
							dark: false,
							tagline: 'Job posting',
							title: 'Digital Intern',
							text: 'And of in characters a suburban and fancy 1995 with In the.',
							button: 'Read more'
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: '/assets/img/boxcards/wallpaper.jpg',
							dark: false,
							tagline: 'Job posting',
							title: 'Digital Intern',
							text: 'And of in characters a suburban and fancy 1995 with In the.',
							button: 'Read more'
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: '/assets/img/boxcards/gizmodo.jpg',
							dark: false,
							tagline: 'Job posting',
							title: 'Digital Intern',
							text: 'And of in characters a suburban and fancy 1995 with In the.',
							button: 'Read more'
						}
					},
					{
						$img_type: 'image',
					},
					{
						$img_type: 'image',
					},
				]
			}
		},
		{
			$module_type_hidden: true,
			module_type: 'simpleton',
			$context_noframe: true,
			context: {
				module_name: 'Husquarna now',
				$background_img_type: 'image',
				background_img: '',
				$background_video_type: 'image',
				background_video: '',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: 0,
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000',
				$columns_min: 1,
				$columns_max: 2,
				$columns_templatitator: '@@global.simpleton_modules',
				columns: [
					{
						$simpleton_type_hidden: true,
						simpleton_type: 'simpleton_text',
						$context_noframe: true,
						context: {
							header: '',
							title: 'Now, we’re making sure Husqvarna Motorcycles is equipped a legend of the street by reinventing the ways the bike is brought to the rider.',
							$text_type: 'textarea',
							text: '',
							purelink: ''
						}
					},
					{
						$simpleton_type_hidden: true,
						simpleton_type: 'simpleton_text',
						$context_noframe: true,
						context: {
							header: '',
							title: '',
							$text_type: 'textarea',
							text: 'Six-year-old John Hobbes 2010 boy is appeared is other and its flights Hobbes Calvin\'s Reformation Calvin Though strip November a enduring in of 31 18 adventurous sold Calvin In characters.',
							purelink: ''
						}
					},
				]
			}
		},
		{
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
							img: '/assets/img/boxcards/hqinshop.jpg',
							dark: false,
							tagline: 'Job posting',
							title: 'Digital Intern',
							text: 'And of in characters a suburban and fancy 1995 with In the.',
							button: 'Read more'
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: '/assets/img/boxcards/hqapp.jpg',
							dark: false,
							tagline: 'Job posting',
							title: 'Digital Intern',
							text: 'And of in characters a suburban and fancy 1995 with In the.',
							button: 'Read more'
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: '/assets/img/boxcards/hqstore.jpg',
							dark: false,
							tagline: 'Job posting',
							title: 'Digital Intern',
							text: 'And of in characters a suburban and fancy 1995 with In the.',
							button: 'Read more'
						}
					}
				]
			}
		},
		{
			$module_type_hidden: true,
			module_type: 'simpleton',
			$context_noframe: true,
			context: {
				$background_img_type: 'image',
				background_img: '/assets/img/jumbos/road.jpg',
				$background_video_type: 'image',
				background_video: '/assets/img/videos/hq.mp4',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: '91',
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000',
				dark: true,
				$columns_min: 1,
				$columns_max: 2,
				$columns_templatitator: '@@global.simpleton_modules',
				columns: [
					{
						$simpleton_type_hidden: true,
						simpleton_type: 'simpleton_text',
						$context_noframe: true,
						context: {
							header: 'Be a pioneer',
							title: 'You know what we’ve done with others. It’s your turn now. Punch it.',
							$text_type: 'textarea',
							text: '',
							purelink: 'Send us an email'
						}
					}
				]
			}
		}
	]
}