{
	$instrument_settings_expander: true,
	instrument_settings: {
		$width_size: 6,
		width: 800,
		$height_size: 6,
		height: 480,
		font: 'Blender-Bold',
		first_level_centerfix: true
	},
	$menu_expander: true,
	$menu_size: 12,
	$menu_templatitator: '@@global.controls',
	menu: [
		{
			label: 'music',
			preselected: false,
			$items_templatitator: '!@global.controls',
			$items_size: 12,
			max_checkbox_selection: 99,
			$items_expandertitle: 'music',
			$items_expander: true,
			items: [
				{
					$type_hidden: true,
					type: 'info',
					label: 'Music controls',
					preselected: true,
					$content_markdown: true,
					$content_type: 'textarea',
					content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473341892_music.png">',
					$items_expandertitle: 'Music controls',
					$items_expander: true,
				},
				{
					label: 'connect device(s)',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'connect device(s)',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'quickswitch',
							label: 'Bluetooth',
							preselected: true,
							$quickitems_min: 0,
							quickitems: [
								{
									label: 'ON',
									preselected: true,
									$items_expandertitle: 'ON'
								},
								{
									label: 'OFF',
									preselected: false,
									$items_expandertitle: 'OFF'
								}
							],
							$items_expandertitle: 'Bluetooth'
						},
						{
							label: 'phone',
							preselected: true,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'phone',
							$items_expander: true,
							items: [
								{
									$type_hidden: true,
									type: 'info',
									label: 'phone 1',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473685757_connect.png">',
									$items_expandertitle: 'phone 1'
								},
								{
									$type_hidden: true,
									type: 'info',
									label: 'phone 2',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473685757_connect.png">',
									$items_expandertitle: 'phone 2'
								}
							],
							max_checkbox_selection: 3
						},
						{
							label: 'headset rider',
							preselected: false,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'headset rider',
							$items_expander: true,
							items: [
								{
									$type_hidden: true,
									type: 'info',
									label: 'headset 1',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473767089_connectrider.png">',
									$items_expandertitle: 'headset 1'
								},
								{
									$type_hidden: true,
									type: 'info',
									label: 'headset 2',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473767089_connectrider.png">',
									$items_expandertitle: 'headset 2'
								}
							],
							max_checkbox_selection: 3
						},
						{
							label: 'headset pillion',
							preselected: false,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'headset pillion',
							$items_expander: true,
							items: [
								{
									$type_hidden: true,
									type: 'info',
									label: 'headset 1',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473767137_connectpillion.png">',
									$items_expandertitle: 'headset 1'
								},
								{
									$type_hidden: true,
									type: 'info',
									label: 'headset 2',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473767137_connectpillion.png">',
									$items_expandertitle: 'headset 2'
								}
							],
							max_checkbox_selection: 3
						}
					]
				}
			]
		},
		{
			label: 'trips / navi',
			preselected: false,
			$items_templatitator: '!@global.controls',
			$items_size: 12,
			max_checkbox_selection: 99,
			$items_expandertitle: 'trips / navi',
			$items_expander: true,
			items: [
				{
					$type_hidden: true,
					type: 'info',
					label: 'trip 1',
					preselected: false,
					$content_markdown: true,
					$content_type: 'textarea',
					content: '<img src="https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473942730_trip1b.png" style="margin-top:-80px">',
					$items_expandertitle: 'trip 1'
				},
				{
					$type_hidden: true,
					type: 'info',
					label: 'trip 2',
					preselected: false,
					$content_markdown: true,
					$content_type: 'textarea',
					content: '<img src="https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473942747_trip2b.png" style="margin-top:-80px">',
					$items_expandertitle: 'trip 2'
				},
				{
					$type_hidden: true,
					type: 'info',
					label: 'Navi controls',
					preselected: true,
					$content_markdown: true,
					$content_type: 'textarea',
					content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473421146_navigation.png" style="margin-top:-60px">',
					$items_expandertitle: 'Navi controls'
				},
				{
					label: 'nav setup',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'nav setup',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'off',
							preselected: false,
							checked: false,
							$items_expandertitle: 'off'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'map',
							preselected: false,
							checked: false,
							$items_expandertitle: 'map'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'turn by turn',
							preselected: true,
							checked: true,
							$items_expandertitle: 'turn by turn'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'map + turn by turn',
							preselected: false,
							checked: false,
							$items_expandertitle: 'map + turn by turn'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'voice only',
							preselected: false,
							checked: false,
							$items_expandertitle: 'voice only'
						}
					]
				},
				{
					label: 'connect device(s)',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'connect device(s)',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'quickswitch',
							label: 'Bluetooth',
							preselected: true,
							$quickitems_min: 0,
							quickitems: [
								{
									label: 'ON',
									preselected: true,
									$items_expandertitle: 'ON'
								},
								{
									label: 'Off',
									preselected: false,
									$items_expandertitle: 'Off'
								}
							],
							$items_expandertitle: 'Bluetooth'
						},
						{
							label: 'phone',
							preselected: true,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'phone',
							$items_expander: true,
							items: [
								{
									$type_hidden: true,
									type: 'info',
									label: 'phone 1',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473685757_connect.png">',
									$items_expandertitle: 'phone 1'
								},
								{
									$type_hidden: true,
									type: 'info',
									label: 'phone 2',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473685757_connect.png">',
									$items_expandertitle: 'phone 2'
								}
							],
							max_checkbox_selection: 3
						},
						{
							label: 'headset rider',
							preselected: false,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'headset rider',
							$items_expander: true,
							items: [
								{
									$type_hidden: true,
									type: 'info',
									label: 'headset 1',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473767089_connectrider.png">',
									$items_expandertitle: 'headset 1'
								},
								{
									$type_hidden: true,
									type: 'info',
									label: 'headset 2',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473767089_connectrider.png">',
									$items_expandertitle: 'headset 2'
								}
							],
							max_checkbox_selection: 3
						},
						{
							label: 'headset pillion',
							preselected: false,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'headset pillion',
							$items_expander: true,
							items: [
								{
									$type_hidden: true,
									type: 'info',
									label: 'headset 1',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473767137_connectpillion.png">',
									$items_expandertitle: 'headset 1'
								},
								{
									$type_hidden: true,
									type: 'info',
									label: 'headset 2',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473767137_connectpillion.png">',
									$items_expandertitle: 'headset 2'
								}
							],
							max_checkbox_selection: 3
						}
					]
				}
			]
		},
		{
			label: 'bike config',
			preselected: true,
			$items_templatitator: '!@global.controls',
			$items_size: 12,
			max_checkbox_selection: 99,
			$items_expandertitle: 'bike config',
			$items_expander: true,
			items: [
				{
					label: 'MTC + MSR',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					$items_expandertitle: 'MTC + MSR',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'OFF',
							preselected: true,
							checked: true,
							$items_expandertitle: 'OFF'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'ON',
							preselected: false,
							checked: false,
							$items_expandertitle: 'ON'
						}
					],
					max_checkbox_selection: 3
				},
				{
					label: 'ABS',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'ABS',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'Off',
							preselected: false,
							checked: false,
							$items_expandertitle: 'Off'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'Road',
							preselected: true,
							checked: true,
							$items_expandertitle: 'Road'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'Offroad',
							preselected: false,
							checked: false,
							$items_expandertitle: 'Offroad'
						}
					]
				},
				{
					label: 'Ride mode',
					preselected: true,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'Ride mode',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'rain',
							preselected: false,
							checked: false,
							$items_expandertitle: 'rain'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'street',
							preselected: true,
							checked: true,
							$items_expandertitle: 'street'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'sport',
							preselected: false,
							checked: false,
							$items_expandertitle: 'sport'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'offroad',
							preselected: false,
							checked: false,
							$items_expandertitle: 'offroad'
						}
					]
				},
				{
					label: 'damping',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'damping',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'sport',
							preselected: false,
							checked: false,
							$items_expandertitle: 'sport'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'street',
							preselected: true,
							checked: true,
							$items_expandertitle: 'street'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'comfort',
							preselected: false,
							checked: false,
							$items_expandertitle: 'comfort'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'offroad',
							preselected: false,
							checked: false,
							$items_expandertitle: 'offroad'
						}
					]
				},
				{
					label: 'load',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'load',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'quickswitch',
							label: 'pillion',
							preselected: false,
							$quickitems_min: 0,
							max_checkbox_selection: 99,
							quickitems: [
								{
									label: 'Yes',
									preselected: false,
									$items_expandertitle: 'Yes'
								},
								{
									label: 'No',
									preselected: true,
									$items_expandertitle: 'No'
								}
							],
							$items_expandertitle: 'pillion'
						},
						{
							$type_hidden: true,
							type: 'quickswitch',
							label: 'luggage',
							preselected: false,
							$quickitems_min: 0,
							max_checkbox_selection: 99,
							quickitems: [
								{
									label: 'Yes',
									preselected: false,
									$items_expandertitle: 'Yes'
								},
								{
									label: 'No',
									preselected: true,
									$items_expandertitle: 'No'
								}
							],
							$items_expandertitle: 'luggage'
						}
					]
				},
				{
					label: 'bike info',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'bike info',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'label',
							preselected: false,
							label: 'Oil temp',
							value: '90 °C',
							$items_expandertitle: 'Oil temp'
						},
						{
							$type_hidden: true,
							type: 'quickswitch',
							label: 'fuel range',
							preselected: false,
							$quickitems_min: 0,
							max_checkbox_selection: 99,
							quickitems: [
								{
									label: '200 km',
									preselected: false,
									$items_expandertitle: '200 km'
								}
							],
							$items_expandertitle: 'fuel range'
						},
						{
							label: 'tire pressure',
							preselected: true,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							max_checkbox_selection: 99,
							$items_expandertitle: 'tire pressure',
							$items_expander: true,
							items: [
								{
									$type_hidden: true,
									type: 'quickswitch',
									label: 'rear wheel',
									preselected: false,
									$quickitems_min: 0,
									max_checkbox_selection: 99,
									quickitems: [
										{
											label: '2.6 Bar',
											preselected: false,
											$items_expandertitle: '2.6 Bar'
										}
									],
									$items_expandertitle: 'rear wheel'
								},
								{
									$type_hidden: true,
									type: 'quickswitch',
									label: 'Front wheel',
									preselected: true,
									$quickitems_min: 0,
									max_checkbox_selection: 99,
									quickitems: [
										{
											label: '2.3 Bar',
											preselected: false,
											$items_expandertitle: '2.3 Bar'
										}
									],
									$items_expandertitle: 'Front wheel'
								},
								{
									$type_hidden: true,
									type: 'quickswitch',
									label: 'TPMS warning',
									preselected: false,
									$quickitems_min: 0,
									quickitems: [
										{
											label: 'ON',
											preselected: true,
											$items_expandertitle: 'ON'
										},
										{
											label: 'OFF',
											preselected: false,
											$items_expandertitle: 'OFF'
										}
									],
									$items_expandertitle: 'TPMS warning'
								}
							]
						},
						{
							$type_hidden: true,
							type: 'quickswitch',
							label: 'odometer',
							preselected: false,
							$quickitems_min: 0,
							max_checkbox_selection: 99,
							quickitems: [
								{
									label: '12.299 km',
									preselected: false,
									$items_expandertitle: '12.299 km'
								}
							],
							$items_expandertitle: 'odometer'
						},
						{
							$type_hidden: true,
							type: 'label',
							preselected: false,
							label: 'battery',
							value: '13.9V',
							$items_expandertitle: 'battery'
						},
						{
							label: 'service',
							preselected: false,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							max_checkbox_selection: 99,
							$items_expandertitle: 'service',
							$items_expander: true,
							items: [
								{
									$type_hidden: true,
									type: 'quickswitch',
									label: 'next service in',
									preselected: false,
									$quickitems_min: 0,
									max_checkbox_selection: 99,
									quickitems: [
										{
											label: '8010 km',
											preselected: false,
											$items_expandertitle: '8010 km'
										}
									],
									$items_expandertitle: 'next service in'
								},
								{
									$type_hidden: true,
									type: 'quickswitch',
									label: 'next service on',
									preselected: true,
									$quickitems_min: 0,
									max_checkbox_selection: 99,
									quickitems: [
										{
											label: '08.2017',
											preselected: false,
											$items_expandertitle: '08.2017'
										}
									],
									$items_expandertitle: 'next service on'
								},
								{
									$type_hidden: true,
									type: 'label',
									preselected: true,
									label: 'software',
									value: 'SWVMY18',
									$items_expandertitle: 'software'
								}
							]
						},
						{
							$type_hidden: true,
							type: 'info',
							label: 'feature list',
							preselected: false,
							$content_markdown: true,
							$content_type: 'textarea',
							content: '<img src="https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473941592_features3.png">',
							$items_expandertitle: 'feature list'
						}
					]
				},
				{
					label: 'quick shift',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					$items_expandertitle: 'quick shift',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'OFF',
							preselected: true,
							checked: true,
							$items_expandertitle: 'OFF'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'ON',
							preselected: false,
							checked: false,
							$items_expandertitle: 'ON'
						}
					],
					max_checkbox_selection: 3
				},
				{
					label: 'Hill Hold',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					$items_expandertitle: 'Hill Hold',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'OFF',
							preselected: true,
							checked: true,
							$items_expandertitle: 'OFF'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'ON',
							preselected: false,
							checked: false,
							$items_expandertitle: 'ON'
						}
					],
					max_checkbox_selection: 3
				},
				{
					label: 'DRL',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					$items_expandertitle: 'DRL',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'OFF',
							preselected: true,
							checked: true,
							$items_expandertitle: 'OFF'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'ON',
							preselected: false,
							checked: false,
							$items_expandertitle: 'ON'
						}
					],
					max_checkbox_selection: 3
				},
				{
					label: 'cornering light test',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'cornering light test',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'right',
							preselected: false,
							checked: false,
							$items_expandertitle: 'right'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'off',
							preselected: true,
							checked: true,
							$items_expandertitle: 'off'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'left',
							preselected: false,
							checked: false,
							$items_expandertitle: 'left'
						}
					]
				}
			]
		},
		{
			label: 'heating',
			preselected: false,
			$items_templatitator: '!@global.controls',
			$items_size: 12,
			max_checkbox_selection: 99,
			$items_expandertitle: 'heating',
			$items_expander: true,
			items: [
				{
					label: 'grips',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'grips',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'off',
							preselected: false,
							checked: true,
							$items_expandertitle: 'off'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'max',
							preselected: true,
							checked: false,
							$items_expandertitle: 'max'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'med',
							preselected: false,
							checked: false,
							$items_expandertitle: 'med'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'min',
							preselected: false,
							checked: false,
							$items_expandertitle: 'min'
						}
					]
				},
				{
					label: 'rider seat',
					preselected: true,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'rider seat',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'off',
							preselected: false,
							checked: true,
							$items_expandertitle: 'off'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'max',
							preselected: true,
							checked: false,
							$items_expandertitle: 'max'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'med',
							preselected: false,
							checked: false,
							$items_expandertitle: 'med'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'min',
							preselected: false,
							checked: false,
							$items_expandertitle: 'min'
						}
					]
				},
				{
					$type_hidden: true,
					type: 'info',
					label: 'pillion seat',
					preselected: false,
					$content_markdown: true,
					$content_type: 'textarea',
					content: '<img src="https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473852309_pillion heating.png">',
					$items_expandertitle: 'pillion seat'
				}
			]
		},
		{
			label: 'instrument settings',
			preselected: false,
			$items_templatitator: '!@global.controls',
			$items_size: 12,
			max_checkbox_selection: 99,
			$items_expandertitle: 'instrument settings',
			$items_expander: true,
			items: [
				{
					label: 'quick selector 1',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'quick selector 1',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'music',
							preselected: false,
							checked: false,
							$items_expandertitle: 'music'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'navigation',
							preselected: false,
							checked: false,
							$items_expandertitle: 'navigation'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'heated grips',
							preselected: true,
							checked: true,
							$items_expandertitle: 'heated grips'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'heated seat',
							preselected: false,
							checked: false,
							$items_expandertitle: 'heated seat'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'ride mode',
							preselected: false,
							checked: false,
							$items_expandertitle: 'ride mode'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'abs',
							preselected: false,
							checked: false,
							$items_expandertitle: 'abs'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'mtc + msr',
							preselected: false,
							checked: false,
							$items_expandertitle: 'mtc + msr'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'damping',
							preselected: false,
							checked: false,
							$items_expandertitle: 'damping'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'load',
							preselected: false,
							checked: false,
							$items_expandertitle: 'load'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'tpms',
							preselected: false,
							checked: false,
							$items_expandertitle: 'tpms'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'fuel range',
							preselected: false,
							checked: false,
							$items_expandertitle: 'fuel range'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'trip 1',
							preselected: false,
							checked: false,
							$items_expandertitle: 'trip 1'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'trip 2',
							preselected: false,
							checked: false,
							$items_expandertitle: 'trip 2'
						}
					]
				},
				{
					label: 'quick selector 2',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'quick selector 2',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'music',
							preselected: false,
							checked: false,
							$items_expandertitle: 'music'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'navigation',
							preselected: false,
							checked: false,
							$items_expandertitle: 'navigation'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'heated grips',
							preselected: false,
							checked: false,
							$items_expandertitle: 'heated grips'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'heated seat',
							preselected: true,
							checked: true,
							$items_expandertitle: 'heated seat'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'ride mode',
							preselected: false,
							checked: false,
							$items_expandertitle: 'ride mode'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'abs',
							preselected: false,
							checked: false,
							$items_expandertitle: 'abs'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'mtc + msr',
							preselected: false,
							checked: false,
							$items_expandertitle: 'mtc + msr'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'damping',
							preselected: false,
							checked: false,
							$items_expandertitle: 'damping'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'load',
							preselected: false,
							checked: false,
							$items_expandertitle: 'load'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'tpms',
							preselected: false,
							checked: false,
							$items_expandertitle: 'tpms'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'fuel range',
							preselected: false,
							checked: false,
							$items_expandertitle: 'fuel range'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'trip 1',
							preselected: false,
							checked: false,
							$items_expandertitle: 'trip 1'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'trip 2',
							preselected: false,
							checked: false,
							$items_expandertitle: 'trip 2'
						}
					]
				},
				{
					label: 'home screen',
					preselected: true,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: '4',
					$items_expandertitle: 'home screen',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'Trip time 1',
							preselected: false,
							checked: false,
							$items_expandertitle: 'Trip time 1'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'Trip distance 1',
							preselected: false,
							checked: false,
							$items_expandertitle: 'Trip distance 1'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'max speed 1',
							preselected: false,
							checked: false,
							$items_expandertitle: 'max speed 1'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'avg speed 1',
							preselected: false,
							checked: false,
							$items_expandertitle: 'avg speed 1'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'avg fuel cons 1',
							preselected: false,
							checked: false,
							$items_expandertitle: 'avg fuel cons 1'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'trip time 2',
							preselected: true,
							checked: true,
							$items_expandertitle: 'trip time 2'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'trip distance 2',
							preselected: false,
							checked: true,
							$items_expandertitle: 'trip distance 2'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'max speed 2',
							preselected: false,
							checked: true,
							$items_expandertitle: 'max speed 2'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'avg speed 2',
							preselected: false,
							checked: false,
							$items_expandertitle: 'avg speed 2'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'avg fuel cons 2',
							preselected: false,
							checked: false,
							$items_expandertitle: 'avg fuel cons 2'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'fuel range',
							preselected: false,
							checked: false,
							$items_expandertitle: 'fuel range'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'tpms front',
							preselected: false,
							checked: true,
							$items_expandertitle: 'tpms front'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'tpms rear',
							preselected: false,
							checked: false,
							$items_expandertitle: 'tpms rear'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'oil temp',
							preselected: false,
							checked: false,
							$items_expandertitle: 'oil temp'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'odo',
							preselected: false,
							checked: false,
							$items_expandertitle: 'odo'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'date',
							preselected: false,
							checked: false,
							$items_expandertitle: 'date'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'battery',
							preselected: false,
							checked: false,
							$items_expandertitle: 'battery'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'signal strenght',
							preselected: false,
							checked: false,
							$items_expandertitle: 'signal strenght'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'phone battery',
							preselected: false,
							checked: false,
							$items_expandertitle: 'phone battery'
						}
					]
				},
				{
					label: 'connect device(s)',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'connect device(s)',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'quickswitch',
							label: 'Bluetooth',
							preselected: true,
							$quickitems_min: 0,
							quickitems: [
								{
									label: 'On',
									preselected: true,
									$items_expandertitle: 'On'
								},
								{
									label: 'OFF',
									preselected: false,
									$items_expandertitle: 'OFF'
								}
							],
							$items_expandertitle: 'Bluetooth'
						},
						{
							label: 'phone',
							preselected: true,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'phone',
							$items_expander: true,
							items: [
								{
									$type_hidden: true,
									type: 'info',
									label: 'phone 1',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473685757_connect.png">',
									$items_expandertitle: 'phone 1'
								},
								{
									$type_hidden: true,
									type: 'info',
									label: 'phone 2',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473685757_connect.png">',
									$items_expandertitle: 'phone 2'
								}
							],
							max_checkbox_selection: 3
						},
						{
							label: 'headset rider',
							preselected: false,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'headset rider',
							$items_expander: true,
							items: [
								{
									$type_hidden: true,
									type: 'info',
									label: 'headset 1',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473767089_connectrider.png">',
									$items_expandertitle: 'headset 1'
								},
								{
									$type_hidden: true,
									type: 'info',
									label: 'headset 2',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473767089_connectrider.png">',
									$items_expandertitle: 'headset 2'
								}
							],
							max_checkbox_selection: 3
						},
						{
							label: 'headset pillion',
							preselected: false,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'headset pillion',
							$items_expander: true,
							items: [
								{
									$type_hidden: true,
									type: 'info',
									label: 'headset 1',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473767137_connectpillion.png">',
									$items_expandertitle: 'headset 1'
								},
								{
									$type_hidden: true,
									type: 'info',
									label: 'headset 2',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473767137_connectpillion.png">',
									$items_expandertitle: 'headset 2'
								}
							],
							max_checkbox_selection: 3
						}
					]
				},
				{
					label: 'shift light',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'shift light',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'quickswitch',
							label: 'Shift light',
							preselected: false,
							$quickitems_min: 0,
							quickitems: [
								{
									label: 'On',
									preselected: true,
									$items_expandertitle: 'On'
								},
								{
									label: 'Off',
									preselected: false,
									$items_expandertitle: 'Off'
								}
							],
							$items_expandertitle: 'Shift light'
						},
						{
							label: 'RPM 1',
							preselected: true,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'RPM 1',
							$items_expander: true,
							items: [
								{
									$type_hidden: true,
									type: 'radio',
									label: '5000',
									preselected: false,
									checked: false,
									$items_expandertitle: '5000'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '5500',
									preselected: false,
									checked: false,
									$items_expandertitle: '5500'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '6000',
									preselected: false,
									checked: false,
									$items_expandertitle: '6000'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '6500',
									preselected: false,
									checked: false,
									$items_expandertitle: '6500'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '7000',
									preselected: false,
									checked: false,
									$items_expandertitle: '7000'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '7500',
									preselected: false,
									checked: false,
									$items_expandertitle: '7500'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '8000',
									preselected: false,
									checked: false,
									$items_expandertitle: '8000'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '8500',
									preselected: true,
									checked: true,
									$items_expandertitle: '8500'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '9000',
									preselected: false,
									checked: false,
									$items_expandertitle: '9000'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '9500',
									preselected: false,
									checked: false,
									$items_expandertitle: '9500'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '10000',
									preselected: false,
									checked: false,
									$items_expandertitle: '10000'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '10500',
									preselected: false,
									checked: false,
									$items_expandertitle: '10500'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '11000',
									preselected: false,
									checked: false,
									$items_expandertitle: '11000'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '11500',
									preselected: false,
									checked: false,
									$items_expandertitle: '11500'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '1200',
									preselected: false,
									checked: false,
									$items_expandertitle: '1200'
								}
							],
							max_checkbox_selection: 3
						},
						{
							label: 'RPM 2',
							preselected: false,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'RPM 2',
							$items_expander: true,
							items: [
								{
									$type_hidden: true,
									type: 'radio',
									label: '5000',
									preselected: false,
									checked: false,
									$items_expandertitle: '5000'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '5500',
									preselected: false,
									checked: false,
									$items_expandertitle: '5500'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '6000',
									preselected: false,
									checked: false,
									$items_expandertitle: '6000'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '6500',
									preselected: false,
									checked: false,
									$items_expandertitle: '6500'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '7000',
									preselected: false,
									checked: false,
									$items_expandertitle: '7000'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '7500',
									preselected: false,
									checked: false,
									$items_expandertitle: '7500'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '8000',
									preselected: false,
									checked: false,
									$items_expandertitle: '8000'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '8500',
									preselected: false,
									checked: false,
									$items_expandertitle: '8500'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '9000',
									preselected: false,
									checked: false,
									$items_expandertitle: '9000'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '9500',
									preselected: false,
									checked: false,
									$items_expandertitle: '9500'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '10000',
									preselected: true,
									checked: true,
									$items_expandertitle: '10000'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '10500',
									preselected: false,
									checked: false,
									$items_expandertitle: '10500'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '11000',
									preselected: false,
									checked: false,
									$items_expandertitle: '11000'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '11500',
									preselected: false,
									checked: false,
									$items_expandertitle: '11500'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '12000',
									preselected: false,
									checked: false,
									$items_expandertitle: '12000'
								}
							],
							max_checkbox_selection: 3
						}
					]
				},
				{
					label: 'units',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'units',
					$items_expander: true,
					items: [
						{
							label: 'distance',
							preselected: false,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'distance',
							$items_expander: true,
							items: [
								{
									$type_hidden: true,
									type: 'radio',
									label: 'kilometer',
									preselected: true,
									checked: true,
									$items_expandertitle: 'kilometer'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: 'miles',
									preselected: false,
									checked: false,
									$items_expandertitle: 'miles'
								}
							],
							max_checkbox_selection: 3
						},
						{
							label: 'temperature',
							preselected: true,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'temperature',
							$items_expander: true,
							items: [
								{
									$type_hidden: true,
									type: 'radio',
									label: 'celsius',
									preselected: true,
									checked: true,
									$items_expandertitle: 'celsius'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: 'fahrenheit',
									preselected: false,
									checked: false,
									$items_expandertitle: 'fahrenheit'
								}
							],
							max_checkbox_selection: 3
						},
						{
							label: 'pressure',
							preselected: false,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'pressure',
							$items_expander: true,
							items: [
								{
									$type_hidden: true,
									type: 'radio',
									label: 'bar',
									preselected: true,
									checked: true,
									$items_expandertitle: 'bar'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: 'psi',
									preselected: false,
									checked: false,
									$items_expandertitle: 'psi'
								}
							],
							max_checkbox_selection: 3
						},
						{
							label: 'consumption',
							preselected: false,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'consumption',
							$items_expander: true,
							items: [
								{
									$type_hidden: true,
									type: 'radio',
									label: 'l/100km',
									preselected: true,
									checked: true,
									$items_expandertitle: 'l/100km'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: 'km/l',
									preselected: false,
									checked: false,
									$items_expandertitle: 'km/l'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: 'usg/100mi',
									preselected: false,
									checked: false,
									$items_expandertitle: 'usg/100mi'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: 'mi/usg',
									preselected: false,
									checked: false,
									$items_expandertitle: 'mi/usg'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: 'm/l',
									preselected: false,
									checked: false,
									$items_expandertitle: 'm/l'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: 'ukg/100mi',
									preselected: false,
									checked: false,
									$items_expandertitle: 'ukg/100mi'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: 'mi/ukg',
									preselected: false,
									checked: false,
									$items_expandertitle: 'mi/ukg'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: 'l/100mi',
									preselected: false,
									checked: false,
									$items_expandertitle: 'l/100mi'
								}
							],
							max_checkbox_selection: 3
						}
					]
				},
				{
					label: 'language',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'language',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'english us',
							preselected: false,
							checked: false,
							$items_expandertitle: 'english us'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'english uk',
							preselected: true,
							checked: true,
							$items_expandertitle: 'english uk'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'german',
							preselected: false,
							checked: false,
							$items_expandertitle: 'german'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'italian',
							preselected: false,
							checked: false,
							$items_expandertitle: 'italian'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'french',
							preselected: false,
							checked: false,
							$items_expandertitle: 'french'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'spanish',
							preselected: false,
							checked: false,
							$items_expandertitle: 'spanish'
						}
					]
				},
				{
					$type_hidden: true,
					type: 'info',
					label: 'clock/date',
					preselected: false,
					$content_markdown: true,
					$content_type: 'textarea',
					content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473766265_clockdate2.png">',
					$items_expandertitle: 'clock/date'
				},
				{
					label: 'certifications',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'certifications',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'label',
							preselected: false,
							label: 'regulatory notice 1',
							value: '',
							$items_expandertitle: 'regulatory notice 1'
						},
						{
							$type_hidden: true,
							type: 'label',
							preselected: false,
							label: 'regulatory notice 2',
							value: '',
							$items_expandertitle: 'regulatory notice 2'
						}
					]
				}
			]
		}
	],
	$static_layers_expander: true,
	static_layers: [
		{
			zindex: 2,
			id: '',
			$image_type: 'image',
			image: 'https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1474009234_infoscreen.png'
		},
		{
			zindex: 15,
			id: '',
			$image_type: 'image',
			image: 'https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473419056_speedometer.png'
		},
		{
			zindex: '20',
			id: 'rever',
			$image_type: 'image',
			image: 'https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473414591_tacho.png'
		},
		{
			zindex: '21',
			id: '',
			$image_type: 'image',
			image: 'https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473407389_numbers rev'
		}
	],
	$menu_styling_expander: true,
	menu_styling: {
		$gradient_color1_type: 'colorpicker',
		gradient_color1: '#3d85c2',
		$gradient_color2_type: 'colorpicker',
		gradient_color2: '#054e90',
		gradient_angle: 135
	},
}