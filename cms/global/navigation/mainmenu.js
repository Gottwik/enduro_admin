{
	$mainmenu_size: 12,
	mainmenu: [
		{
			id: 'stories',
			label: 'Stories',
			megamenu: true,
			megamenu_url_prefix: '/story',
			items: [
				{
					brand: 'Husqvarna Motorcycles',
					label: 'A story about challengers',
					link: 'hq',
					$background_color_type: 'colorpicker',
					background_color: '#44526c',
					$background_image_type: 'image',
					background_image: '/assets/img/jumbos/twohq.jpg'
				},
				{
					brand: 'Ottobock',
					label: 'A story about confidence',
					link: 'ktm',
					$background_color_type: 'colorpicker',
					background_color: '#cc8046',
					$background_image_type: 'image',
					background_image: '/assets/img/jumbos/retrorider.jpg'
				},
				{
					brand: 'Gasteiner',
					label: 'A story about small choices',
					link: 'Gasteiner',
					$background_color_info: 'whatup',
					$background_color_type: 'colorpicker',
					background_color: '#8cb8b9',
					$background_image_type: 'image',
					background_image: '/assets/img/jumbos/twohq.jpg'
				}
			]
		},
		{
			label: 'Culture',
			link: '/culture'
		},
		{
			label: 'Exchange',
			link: '/exchange'
		},
		{
			label: 'Careers',
			link: '/careers'
		}
	]
}