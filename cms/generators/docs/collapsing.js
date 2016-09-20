{
	instrument_settings: {
		$width_size: 6,
		width: 800,
		$height_size: 6,
		height: 480,
		font: 'Blender-Bold',
		first_level_centerfix: true
	},
	$menu_size: 12,
	$menu_templatitator: '@@global.controls',
	menu: [
		{
			label: 'music',
			preselected: false,
			$items_templatitator: '!@global.controls',
			$items_size: 12,
			max_checkbox_selection: 99,
			$items_expandertitle: 'music\'s Items',
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
					$items_expandertitle: 'Music controls\'s Items',
					$items_expander: true
				},
				{
					label: 'connect device(s)',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'connect device(s)\'s Items',
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
									$items_expandertitle: 'ON\'s Items'
								},
								{
									label: 'OFF',
									preselected: false,
									$items_expandertitle: 'OFF\'s Items'
								}
							],
							$items_expandertitle: 'Bluetooth\'s Items'
						},
						{
							label: 'phone',
							preselected: true,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'phone\'s Items',
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
									$items_expandertitle: 'phone 1\'s Items'
								},
								{
									$type_hidden: true,
									type: 'info',
									label: 'phone 2',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473685757_connect.png">',
									$items_expandertitle: 'phone 2\'s Items'
								}
							],
							max_checkbox_selection: 3
						},
						{
							label: 'headset rider',
							preselected: false,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'headset rider\'s Items',
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
									$items_expandertitle: 'headset 1\'s Items'
								},
								{
									$type_hidden: true,
									type: 'info',
									label: 'headset 2',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473767089_connectrider.png">',
									$items_expandertitle: 'headset 2\'s Items'
								}
							],
							max_checkbox_selection: 3
						},
						{
							label: 'headset pillion',
							preselected: false,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'headset pillion\'s Items',
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
									$items_expandertitle: 'headset 1\'s Items'
								},
								{
									$type_hidden: true,
									type: 'info',
									label: 'headset 2',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473767137_connectpillion.png">',
									$items_expandertitle: 'headset 2\'s Items'
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
			$items_expandertitle: 'trips / navi\'s Items',
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
					$items_expandertitle: 'trip 1\'s Items'
				},
				{
					$type_hidden: true,
					type: 'info',
					label: 'trip 2',
					preselected: false,
					$content_markdown: true,
					$content_type: 'textarea',
					content: '<img src="https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473942747_trip2b.png" style="margin-top:-80px">',
					$items_expandertitle: 'trip 2\'s Items'
				},
				{
					$type_hidden: true,
					type: 'info',
					label: 'Navi controls',
					preselected: true,
					$content_markdown: true,
					$content_type: 'textarea',
					content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473421146_navigation.png" style="margin-top:-60px">',
					$items_expandertitle: 'Navi controls\'s Items'
				},
				{
					label: 'nav setup',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'nav setup\'s Items',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'off',
							preselected: false,
							checked: false,
							$items_expandertitle: 'off\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'map',
							preselected: false,
							checked: false,
							$items_expandertitle: 'map\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'turn by turn',
							preselected: true,
							checked: true,
							$items_expandertitle: 'turn by turn\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'map + turn by turn',
							preselected: false,
							checked: false,
							$items_expandertitle: 'map + turn by turn\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'voice only',
							preselected: false,
							checked: false,
							$items_expandertitle: 'voice only\'s Items'
						}
					]
				},
				{
					label: 'connect device(s)',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'connect device(s)\'s Items',
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
									$items_expandertitle: 'ON\'s Items'
								},
								{
									label: 'Off',
									preselected: false,
									$items_expandertitle: 'Off\'s Items'
								}
							],
							$items_expandertitle: 'Bluetooth\'s Items'
						},
						{
							label: 'phone',
							preselected: true,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'phone\'s Items',
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
									$items_expandertitle: 'phone 1\'s Items'
								},
								{
									$type_hidden: true,
									type: 'info',
									label: 'phone 2',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473685757_connect.png">',
									$items_expandertitle: 'phone 2\'s Items'
								}
							],
							max_checkbox_selection: 3
						},
						{
							label: 'headset rider',
							preselected: false,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'headset rider\'s Items',
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
									$items_expandertitle: 'headset 1\'s Items'
								},
								{
									$type_hidden: true,
									type: 'info',
									label: 'headset 2',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473767089_connectrider.png">',
									$items_expandertitle: 'headset 2\'s Items'
								}
							],
							max_checkbox_selection: 3
						},
						{
							label: 'headset pillion',
							preselected: false,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'headset pillion\'s Items',
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
									$items_expandertitle: 'headset 1\'s Items'
								},
								{
									$type_hidden: true,
									type: 'info',
									label: 'headset 2',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473767137_connectpillion.png">',
									$items_expandertitle: 'headset 2\'s Items'
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
			$items_expandertitle: 'bike config\'s Items',
			$items_expander: true,
			items: [
				{
					label: 'MTC + MSR',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					$items_expandertitle: 'MTC + MSR\'s Items',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'OFF',
							preselected: true,
							checked: true,
							$items_expandertitle: 'OFF\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'ON',
							preselected: false,
							checked: false,
							$items_expandertitle: 'ON\'s Items'
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
					$items_expandertitle: 'ABS\'s Items',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'Off',
							preselected: false,
							checked: false,
							$items_expandertitle: 'Off\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'Road',
							preselected: true,
							checked: true,
							$items_expandertitle: 'Road\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'Offroad',
							preselected: false,
							checked: false,
							$items_expandertitle: 'Offroad\'s Items'
						}
					]
				},
				{
					label: 'Ride mode',
					preselected: true,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'Ride mode\'s Items',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'rain',
							preselected: false,
							checked: false,
							$items_expandertitle: 'rain\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'street',
							preselected: true,
							checked: true,
							$items_expandertitle: 'street\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'sport',
							preselected: false,
							checked: false,
							$items_expandertitle: 'sport\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'offroad',
							preselected: false,
							checked: false,
							$items_expandertitle: 'offroad\'s Items'
						}
					]
				},
				{
					label: 'damping',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'damping\'s Items',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'sport',
							preselected: false,
							checked: false,
							$items_expandertitle: 'sport\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'street',
							preselected: true,
							checked: true,
							$items_expandertitle: 'street\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'comfort',
							preselected: false,
							checked: false,
							$items_expandertitle: 'comfort\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'offroad',
							preselected: false,
							checked: false,
							$items_expandertitle: 'offroad\'s Items'
						}
					]
				},
				{
					label: 'load',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'load\'s Items',
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
									$items_expandertitle: 'Yes\'s Items'
								},
								{
									label: 'No',
									preselected: true,
									$items_expandertitle: 'No\'s Items'
								}
							],
							$items_expandertitle: 'pillion\'s Items'
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
									$items_expandertitle: 'Yes\'s Items'
								},
								{
									label: 'No',
									preselected: true,
									$items_expandertitle: 'No\'s Items'
								}
							],
							$items_expandertitle: 'luggage\'s Items'
						}
					]
				},
				{
					label: 'bike info',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'bike info\'s Items',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'label',
							preselected: false,
							label: 'Oil temp',
							value: '90 °C',
							$items_expandertitle: 'Oil temp\'s Items'
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
									$items_expandertitle: '200 km\'s Items'
								}
							],
							$items_expandertitle: 'fuel range\'s Items'
						},
						{
							label: 'tire pressure',
							preselected: true,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							max_checkbox_selection: 99,
							$items_expandertitle: 'tire pressure\'s Items',
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
											$items_expandertitle: '2.6 Bar\'s Items'
										}
									],
									$items_expandertitle: 'rear wheel\'s Items'
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
											$items_expandertitle: '2.3 Bar\'s Items'
										}
									],
									$items_expandertitle: 'Front wheel\'s Items'
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
											$items_expandertitle: 'ON\'s Items'
										},
										{
											label: 'OFF',
											preselected: false,
											$items_expandertitle: 'OFF\'s Items'
										}
									],
									$items_expandertitle: 'TPMS warning\'s Items'
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
									$items_expandertitle: '12.299 km\'s Items'
								}
							],
							$items_expandertitle: 'odometer\'s Items'
						},
						{
							$type_hidden: true,
							type: 'label',
							preselected: false,
							label: 'battery',
							value: '13.9V',
							$items_expandertitle: 'battery\'s Items'
						},
						{
							label: 'service',
							preselected: false,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							max_checkbox_selection: 99,
							$items_expandertitle: 'service\'s Items',
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
											$items_expandertitle: '8010 km\'s Items'
										}
									],
									$items_expandertitle: 'next service in\'s Items'
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
											$items_expandertitle: '08.2017\'s Items'
										}
									],
									$items_expandertitle: 'next service on\'s Items'
								},
								{
									$type_hidden: true,
									type: 'label',
									preselected: true,
									label: 'software',
									value: 'SWVMY18',
									$items_expandertitle: 'software\'s Items'
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
							$items_expandertitle: 'feature list\'s Items'
						}
					]
				},
				{
					label: 'quick shift',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					$items_expandertitle: 'quick shift\'s Items',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'OFF',
							preselected: true,
							checked: true,
							$items_expandertitle: 'OFF\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'ON',
							preselected: false,
							checked: false,
							$items_expandertitle: 'ON\'s Items'
						}
					],
					max_checkbox_selection: 3
				},
				{
					label: 'Hill Hold',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					$items_expandertitle: 'Hill Hold\'s Items',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'OFF',
							preselected: true,
							checked: true,
							$items_expandertitle: 'OFF\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'ON',
							preselected: false,
							checked: false,
							$items_expandertitle: 'ON\'s Items'
						}
					],
					max_checkbox_selection: 3
				},
				{
					label: 'DRL',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					$items_expandertitle: 'DRL\'s Items',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'OFF',
							preselected: true,
							checked: true,
							$items_expandertitle: 'OFF\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'ON',
							preselected: false,
							checked: false,
							$items_expandertitle: 'ON\'s Items'
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
					$items_expandertitle: 'cornering light test\'s Items',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'right',
							preselected: false,
							checked: false,
							$items_expandertitle: 'right\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'off',
							preselected: true,
							checked: true,
							$items_expandertitle: 'off\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'left',
							preselected: false,
							checked: false,
							$items_expandertitle: 'left\'s Items'
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
			$items_expandertitle: 'heating\'s Items',
			$items_expander: true,
			items: [
				{
					label: 'grips',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'grips\'s Items',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'off',
							preselected: false,
							checked: true,
							$items_expandertitle: 'off\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'max',
							preselected: true,
							checked: false,
							$items_expandertitle: 'max\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'med',
							preselected: false,
							checked: false,
							$items_expandertitle: 'med\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'min',
							preselected: false,
							checked: false,
							$items_expandertitle: 'min\'s Items'
						}
					]
				},
				{
					label: 'rider seat',
					preselected: true,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'rider seat\'s Items',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'off',
							preselected: false,
							checked: true,
							$items_expandertitle: 'off\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'max',
							preselected: true,
							checked: false,
							$items_expandertitle: 'max\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'med',
							preselected: false,
							checked: false,
							$items_expandertitle: 'med\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'min',
							preselected: false,
							checked: false,
							$items_expandertitle: 'min\'s Items'
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
					$items_expandertitle: 'pillion seat\'s Items'
				}
			]
		},
		{
			label: 'instrument settings',
			preselected: false,
			$items_templatitator: '!@global.controls',
			$items_size: 12,
			max_checkbox_selection: 99,
			$items_expandertitle: 'instrument settings\'s Items',
			$items_expander: true,
			items: [
				{
					label: 'quick selector 1',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'quick selector 1\'s Items',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'music',
							preselected: false,
							checked: false,
							$items_expandertitle: 'music\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'navigation',
							preselected: false,
							checked: false,
							$items_expandertitle: 'navigation\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'heated grips',
							preselected: true,
							checked: true,
							$items_expandertitle: 'heated grips\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'heated seat',
							preselected: false,
							checked: false,
							$items_expandertitle: 'heated seat\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'ride mode',
							preselected: false,
							checked: false,
							$items_expandertitle: 'ride mode\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'abs',
							preselected: false,
							checked: false,
							$items_expandertitle: 'abs\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'mtc + msr',
							preselected: false,
							checked: false,
							$items_expandertitle: 'mtc + msr\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'damping',
							preselected: false,
							checked: false,
							$items_expandertitle: 'damping\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'load',
							preselected: false,
							checked: false,
							$items_expandertitle: 'load\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'tpms',
							preselected: false,
							checked: false,
							$items_expandertitle: 'tpms\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'fuel range',
							preselected: false,
							checked: false,
							$items_expandertitle: 'fuel range\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'trip 1',
							preselected: false,
							checked: false,
							$items_expandertitle: 'trip 1\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'trip 2',
							preselected: false,
							checked: false,
							$items_expandertitle: 'trip 2\'s Items'
						}
					]
				},
				{
					label: 'quick selector 2',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'quick selector 2\'s Items',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'music',
							preselected: false,
							checked: false,
							$items_expandertitle: 'music\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'navigation',
							preselected: false,
							checked: false,
							$items_expandertitle: 'navigation\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'heated grips',
							preselected: false,
							checked: false,
							$items_expandertitle: 'heated grips\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'heated seat',
							preselected: true,
							checked: true,
							$items_expandertitle: 'heated seat\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'ride mode',
							preselected: false,
							checked: false,
							$items_expandertitle: 'ride mode\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'abs',
							preselected: false,
							checked: false,
							$items_expandertitle: 'abs\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'mtc + msr',
							preselected: false,
							checked: false,
							$items_expandertitle: 'mtc + msr\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'damping',
							preselected: false,
							checked: false,
							$items_expandertitle: 'damping\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'load',
							preselected: false,
							checked: false,
							$items_expandertitle: 'load\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'tpms',
							preselected: false,
							checked: false,
							$items_expandertitle: 'tpms\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'fuel range',
							preselected: false,
							checked: false,
							$items_expandertitle: 'fuel range\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'trip 1',
							preselected: false,
							checked: false,
							$items_expandertitle: 'trip 1\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'trip 2',
							preselected: false,
							checked: false,
							$items_expandertitle: 'trip 2\'s Items'
						}
					]
				},
				{
					label: 'home screen',
					preselected: true,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: '4',
					$items_expandertitle: 'home screen\'s Items',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'Trip time 1',
							preselected: false,
							checked: false,
							$items_expandertitle: 'Trip time 1\'s Items'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'Trip distance 1',
							preselected: false,
							checked: false,
							$items_expandertitle: 'Trip distance 1\'s Items'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'max speed 1',
							preselected: false,
							checked: false,
							$items_expandertitle: 'max speed 1\'s Items'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'avg speed 1',
							preselected: false,
							checked: false,
							$items_expandertitle: 'avg speed 1\'s Items'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'avg fuel cons 1',
							preselected: false,
							checked: false,
							$items_expandertitle: 'avg fuel cons 1\'s Items'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'trip time 2',
							preselected: true,
							checked: true,
							$items_expandertitle: 'trip time 2\'s Items'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'trip distance 2',
							preselected: false,
							checked: true,
							$items_expandertitle: 'trip distance 2\'s Items'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'max speed 2',
							preselected: false,
							checked: true,
							$items_expandertitle: 'max speed 2\'s Items'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'avg speed 2',
							preselected: false,
							checked: false,
							$items_expandertitle: 'avg speed 2\'s Items'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'avg fuel cons 2',
							preselected: false,
							checked: false,
							$items_expandertitle: 'avg fuel cons 2\'s Items'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'fuel range',
							preselected: false,
							checked: false,
							$items_expandertitle: 'fuel range\'s Items'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'tpms front',
							preselected: false,
							checked: true,
							$items_expandertitle: 'tpms front\'s Items'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'tpms rear',
							preselected: false,
							checked: false,
							$items_expandertitle: 'tpms rear\'s Items'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'oil temp',
							preselected: false,
							checked: false,
							$items_expandertitle: 'oil temp\'s Items'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'odo',
							preselected: false,
							checked: false,
							$items_expandertitle: 'odo\'s Items'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'date',
							preselected: false,
							checked: false,
							$items_expandertitle: 'date\'s Items'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'battery',
							preselected: false,
							checked: false,
							$items_expandertitle: 'battery\'s Items'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'signal strenght',
							preselected: false,
							checked: false,
							$items_expandertitle: 'signal strenght\'s Items'
						},
						{
							$type_hidden: true,
							type: 'checkbox',
							label: 'phone battery',
							preselected: false,
							checked: false,
							$items_expandertitle: 'phone battery\'s Items'
						}
					]
				},
				{
					label: 'connect device(s)',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'connect device(s)\'s Items',
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
									$items_expandertitle: 'On\'s Items'
								},
								{
									label: 'OFF',
									preselected: false,
									$items_expandertitle: 'OFF\'s Items'
								}
							],
							$items_expandertitle: 'Bluetooth\'s Items'
						},
						{
							label: 'phone',
							preselected: true,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'phone\'s Items',
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
									$items_expandertitle: 'phone 1\'s Items'
								},
								{
									$type_hidden: true,
									type: 'info',
									label: 'phone 2',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473685757_connect.png">',
									$items_expandertitle: 'phone 2\'s Items'
								}
							],
							max_checkbox_selection: 3
						},
						{
							label: 'headset rider',
							preselected: false,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'headset rider\'s Items',
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
									$items_expandertitle: 'headset 1\'s Items'
								},
								{
									$type_hidden: true,
									type: 'info',
									label: 'headset 2',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473767089_connectrider.png">',
									$items_expandertitle: 'headset 2\'s Items'
								}
							],
							max_checkbox_selection: 3
						},
						{
							label: 'headset pillion',
							preselected: false,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'headset pillion\'s Items',
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
									$items_expandertitle: 'headset 1\'s Items'
								},
								{
									$type_hidden: true,
									type: 'info',
									label: 'headset 2',
									preselected: false,
									$content_markdown: true,
									$content_type: 'textarea',
									content: '<img src= "https://s3-eu-west-1.amazonaws.com/kiska.instrumentmaker/direct_uploads/1473767137_connectpillion.png">',
									$items_expandertitle: 'headset 2\'s Items'
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
					$items_expandertitle: 'shift light\'s Items',
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
									$items_expandertitle: 'On\'s Items'
								},
								{
									label: 'Off',
									preselected: false,
									$items_expandertitle: 'Off\'s Items'
								}
							],
							$items_expandertitle: 'Shift light\'s Items'
						},
						{
							label: 'RPM 1',
							preselected: true,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'RPM 1\'s Items',
							$items_expander: true,
							items: [
								{
									$type_hidden: true,
									type: 'radio',
									label: '5000',
									preselected: false,
									checked: false,
									$items_expandertitle: '5000\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '5500',
									preselected: false,
									checked: false,
									$items_expandertitle: '5500\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '6000',
									preselected: false,
									checked: false,
									$items_expandertitle: '6000\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '6500',
									preselected: false,
									checked: false,
									$items_expandertitle: '6500\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '7000',
									preselected: false,
									checked: false,
									$items_expandertitle: '7000\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '7500',
									preselected: false,
									checked: false,
									$items_expandertitle: '7500\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '8000',
									preselected: false,
									checked: false,
									$items_expandertitle: '8000\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '8500',
									preselected: true,
									checked: true,
									$items_expandertitle: '8500\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '9000',
									preselected: false,
									checked: false,
									$items_expandertitle: '9000\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '9500',
									preselected: false,
									checked: false,
									$items_expandertitle: '9500\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '10000',
									preselected: false,
									checked: false,
									$items_expandertitle: '10000\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '10500',
									preselected: false,
									checked: false,
									$items_expandertitle: '10500\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '11000',
									preselected: false,
									checked: false,
									$items_expandertitle: '11000\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '11500',
									preselected: false,
									checked: false,
									$items_expandertitle: '11500\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '1200',
									preselected: false,
									checked: false,
									$items_expandertitle: '1200\'s Items'
								}
							],
							max_checkbox_selection: 3
						},
						{
							label: 'RPM 2',
							preselected: false,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'RPM 2\'s Items',
							$items_expander: true,
							items: [
								{
									$type_hidden: true,
									type: 'radio',
									label: '5000',
									preselected: false,
									checked: false,
									$items_expandertitle: '5000\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '5500',
									preselected: false,
									checked: false,
									$items_expandertitle: '5500\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '6000',
									preselected: false,
									checked: false,
									$items_expandertitle: '6000\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '6500',
									preselected: false,
									checked: false,
									$items_expandertitle: '6500\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '7000',
									preselected: false,
									checked: false,
									$items_expandertitle: '7000\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '7500',
									preselected: false,
									checked: false,
									$items_expandertitle: '7500\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '8000',
									preselected: false,
									checked: false,
									$items_expandertitle: '8000\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '8500',
									preselected: false,
									checked: false,
									$items_expandertitle: '8500\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '9000',
									preselected: false,
									checked: false,
									$items_expandertitle: '9000\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '9500',
									preselected: false,
									checked: false,
									$items_expandertitle: '9500\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '10000',
									preselected: true,
									checked: true,
									$items_expandertitle: '10000\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '10500',
									preselected: false,
									checked: false,
									$items_expandertitle: '10500\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '11000',
									preselected: false,
									checked: false,
									$items_expandertitle: '11000\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '11500',
									preselected: false,
									checked: false,
									$items_expandertitle: '11500\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: '12000',
									preselected: false,
									checked: false,
									$items_expandertitle: '12000\'s Items'
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
					$items_expandertitle: 'units\'s Items',
					$items_expander: true,
					items: [
						{
							label: 'distance',
							preselected: false,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'distance\'s Items',
							$items_expander: true,
							items: [
								{
									$type_hidden: true,
									type: 'radio',
									label: 'kilometer',
									preselected: true,
									checked: true,
									$items_expandertitle: 'kilometer\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: 'miles',
									preselected: false,
									checked: false,
									$items_expandertitle: 'miles\'s Items'
								}
							],
							max_checkbox_selection: 3
						},
						{
							label: 'temperature',
							preselected: true,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'temperature\'s Items',
							$items_expander: true,
							items: [
								{
									$type_hidden: true,
									type: 'radio',
									label: 'celsius',
									preselected: true,
									checked: true,
									$items_expandertitle: 'celsius\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: 'fahrenheit',
									preselected: false,
									checked: false,
									$items_expandertitle: 'fahrenheit\'s Items'
								}
							],
							max_checkbox_selection: 3
						},
						{
							label: 'pressure',
							preselected: false,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'pressure\'s Items',
							$items_expander: true,
							items: [
								{
									$type_hidden: true,
									type: 'radio',
									label: 'bar',
									preselected: true,
									checked: true,
									$items_expandertitle: 'bar\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: 'psi',
									preselected: false,
									checked: false,
									$items_expandertitle: 'psi\'s Items'
								}
							],
							max_checkbox_selection: 3
						},
						{
							label: 'consumption',
							preselected: false,
							$items_templatitator: '!@global.controls',
							$items_size: 12,
							$items_expandertitle: 'consumption\'s Items',
							$items_expander: true,
							items: [
								{
									$type_hidden: true,
									type: 'radio',
									label: 'l/100km',
									preselected: true,
									checked: true,
									$items_expandertitle: 'l/100km\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: 'km/l',
									preselected: false,
									checked: false,
									$items_expandertitle: 'km/l\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: 'usg/100mi',
									preselected: false,
									checked: false,
									$items_expandertitle: 'usg/100mi\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: 'mi/usg',
									preselected: false,
									checked: false,
									$items_expandertitle: 'mi/usg\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: 'm/l',
									preselected: false,
									checked: false,
									$items_expandertitle: 'm/l\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: 'ukg/100mi',
									preselected: false,
									checked: false,
									$items_expandertitle: 'ukg/100mi\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: 'mi/ukg',
									preselected: false,
									checked: false,
									$items_expandertitle: 'mi/ukg\'s Items'
								},
								{
									$type_hidden: true,
									type: 'radio',
									label: 'l/100mi',
									preselected: false,
									checked: false,
									$items_expandertitle: 'l/100mi\'s Items'
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
					$items_expandertitle: 'language\'s Items',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'radio',
							label: 'english us',
							preselected: false,
							checked: false,
							$items_expandertitle: 'english us\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'english uk',
							preselected: true,
							checked: true,
							$items_expandertitle: 'english uk\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'german',
							preselected: false,
							checked: false,
							$items_expandertitle: 'german\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'italian',
							preselected: false,
							checked: false,
							$items_expandertitle: 'italian\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'french',
							preselected: false,
							checked: false,
							$items_expandertitle: 'french\'s Items'
						},
						{
							$type_hidden: true,
							type: 'radio',
							label: 'spanish',
							preselected: false,
							checked: false,
							$items_expandertitle: 'spanish\'s Items'
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
					$items_expandertitle: 'clock/date\'s Items'
				},
				{
					label: 'certifications',
					preselected: false,
					$items_templatitator: '!@global.controls',
					$items_size: 12,
					max_checkbox_selection: 99,
					$items_expandertitle: 'certifications\'s Items',
					$items_expander: true,
					items: [
						{
							$type_hidden: true,
							type: 'label',
							preselected: false,
							label: 'regulatory notice 1',
							value: '',
							$items_expandertitle: 'regulatory notice 1\'s Items'
						},
						{
							$type_hidden: true,
							type: 'label',
							preselected: false,
							label: 'regulatory notice 2',
							value: '',
							$items_expandertitle: 'regulatory notice 2\'s Items'
						}
					]
				}
			]
		}
	],
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
	menu_styling: {
		$gradient_color1_type: 'colorpicker',
		gradient_color1: '#3d85c2',
		$gradient_color2_type: 'colorpicker',
		gradient_color2: '#054e90',
		gradient_angle: 135
	},
	gears: '30 60 80 110 150'
}