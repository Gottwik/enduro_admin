{
	controls: {

		// * ———————————————————————————————————————————————————————— * //
		// * 	opener
		// * ———————————————————————————————————————————————————————— * //
		opener: {
			label: '',
			preselected: false,
			$items_templatitator: '!@global.controls',
			$items_size: 12,
			items: [],
			max_checkbox_selection: 3,
		},

		// * ———————————————————————————————————————————————————————— * //
		// * 	checkbox
		// * ———————————————————————————————————————————————————————— * //
		checkbox: {
			$type_hidden: true,
			type: 'checkbox',
			label: '',
			preselected: false,
			checked: false,
		},

		// * ———————————————————————————————————————————————————————— * //
		// * 	textarea
		// * ———————————————————————————————————————————————————————— * //
		info: {
			$type_hidden: true,
			type: 'info',
			label: '',
			preselected: false,
			$content_smaller: true,
			$content_markdown: true,
			$content_type: 'textarea',
			content: '',
		},

		// * ———————————————————————————————————————————————————————— * //
		// * 	radio
		// * ———————————————————————————————————————————————————————— * //
		radio: {
			$type_hidden: true,
			type: 'radio',
			label: '',
			preselected: false,
			checked: false,
		},

		// * ———————————————————————————————————————————————————————— * //
		// * 	quickswitch
		// * ———————————————————————————————————————————————————————— * //
		quickswitch: {
			$type_hidden: true,
			type: 'quickswitch',
			label: '',
			preselected: false,
			$quickitems_min: 0,
			quickitems: [
				{
					label: 'Yes',
					preselected: false,
				},
				{
					label: 'No',
					preselected: false,
				},
			]
		},

		// * ———————————————————————————————————————————————————————— * //
		// * 	label
		// * ———————————————————————————————————————————————————————— * //
		label: {
			$type_hidden: true,
			type: 'label',
			preselected: false,
			label: '',
			value: ''
		},

	}
}
