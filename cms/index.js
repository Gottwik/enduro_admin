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
				background_img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/01.jpg',
				$background_video_type: 'image',
				background_video: '',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: '17',
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000',
				$jumbotext_type: 'textarea',
				jumbotext: 'Boosting self-confidence through personalisation. A story about immersion.'
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'simpleton',
			$context_expander: true,
			$context_noframe: true,
			context: {
				module_name: 'Relationship',
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
				dark: false,
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
							title: 'Designing for the real meaning of “Quality of Life”.',
							$text_type: 'textarea',
							text: 'The designs that make a real difference in people’s lives are the ones created when the studio and client work in tandem. The Genium Protector was built from the ground up in close partnership with Ottobock and Pohlig. In no other area of design has there been a more sincere intention on the part of the designer to make a difference.',
							purelink: ''
						}
					}
				]
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'jumbotron',
			$context_expander: true,
			$context_noframe: true,
			context: {
				$background_img_type: 'image',
				$background_img_label: 'Background image',
				background_img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/02.jpg',
				$background_video_type: 'image',
				background_video: '',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: '17',
				$veilcolor_info: 'Choose a color for the veil. Defaults to black.',
				$veilcolor_type: 'colorpicker',
				veilcolor: '#000',
				$jumbotext_type: 'textarea',
				jumbotext: '“Losing a leg is life changing. But wearing the right prosthesis is as well.“'
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'simpleton',
			$context_expander: true,
			$context_noframe: true,
			context: {
				module_name: 'Connection',
				social: false,
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
				dark: false,
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
							title: 'Can you think of a product with a more personal connection to the user?',
							$text_type: 'textarea',
							text: 'Wearing an item in lieu of a body part, rather than on it, is a deeply personal experience. Trust in a brand can be won or lost in even the most minute of details. So, if a prosthesis replaces a body part, it should replicate its appearance, right?\n\nNot necessarily.',
							purelink: ''
						}
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
									img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/03_small_image.jpg'
								}
							]
						}
					}
				]
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'squarebox',
			$context_expander: true,
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
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/01.jpg',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: ''
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/02.jpg',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: ''
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/03.jpg',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: ''
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/04.jpg',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: ''
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/05.jpg',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: ''
						}
					}
				]
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'simpleton',
			$context_expander: true,
			$context_noframe: true,
			context: {
				module_name: 'Personalisation',
				social: false,
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
				dark: false,
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
							title: 'The GENIUM Protector adds form and function to a prosthetic knee.',
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
							text: 'Made up of a shin component and innovative foot cuff, it is designed to protect against daily wear and tear. By swapping out the protector’s changeable inserts people can individualise their own prosthesis. One of these people is Mathias Hofman.',
							link: ''
						}
					}
				]
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'jumbotron',
			$context_expander: true,
			$context_noframe: true,
			context: {
				$background_img_type: 'image',
				$background_img_label: 'Background image',
				background_img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/05.jpg',
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
		{
			$module_type_type: 'title',
			module_type: 'simpleton',
			$context_expander: true,
			$context_noframe: true,
			context: {
				module_name: 'Design DNA',
				social: false,
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
				dark: false,
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
							title: 'Redefining Ottobock‘s design DNA for the healthcare sector of prosthetics.',
							$text_type: 'textarea',
							text: '',
							purelink: ''
						}
					}
				]
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'squarebox',
			$context_expander: true,
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
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/01.jpg',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: ''
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/02.jpg',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: ''
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/03.jpg',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: ''
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/04.jpg',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: ''
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/05.jpg',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: ''
						}
					}
				]
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'simpleton',
			$context_expander: true,
			$context_noframe: true,
			context: {
				module_name: 'Innovation',
				social: false,
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
				dark: false,
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
							title: 'It’s about more than designing products. Meaningful designs are rooted in personal stories.',
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
							text: 'In this new life, Mathias Hofman has become a prosthetics expert and KISKA ambassador: “Savvy users require products that are tailored to their specific needs, lifestyle and tastes. The next evolution of prostheses is self-learning; products that adapt on-the-fly to the user’s style, surroundings, activities and physical situations.”',
							link: ''
						}
					}
				]
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'squarebox',
			$context_expander: true,
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
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/01.jpg',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: ''
						}
					},
					{
						$square_type_hidden: true,
						square_type: 'square_img2text',
						$context_noframe: true,
						context: {
							$img_type: 'image',
							img: 'https://s3-eu-west-1.amazonaws.com/enduro.static/direct_uploads/02.jpg',
							dark: false,
							tagline: '',
							title: '',
							text: '',
							button: ''
						}
					}
				]
			}
		},
		{
			$module_type_type: 'title',
			module_type: 'simpleton',
			$context_expander: true,
			$context_noframe: true,
			context: {
				module_name: '',
				social: false,
				$background_img_type: 'image',
				background_img: '',
				$background_video_type: 'image',
				background_video: '',
				$veil_info: 'Select opacity of the veil.',
				$veil_type: 'slider',
				veil: '100',
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
							header: 'Your story',
							title: 'Let’s improve the lives of others together.',
							$text_type: 'textarea',
							text: '',
							purelink: 'We care about your story >'
						}
					}
				]
			}
		}
	]
}