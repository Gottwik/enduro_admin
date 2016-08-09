{
	title: 'Termination',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Termination is adding information to data fields that is used exclusively by admin interface. You can specify all kinds of properties, such as types, limitations, hide/show things, remove frames, size the input fields and much more\n\nGeneraly, to use any termination, you prepend dollar sign -\'$\' and add termination property after a underscore. So if you have field `name`, you can hide it from admin by `$name_hidden: true`.\n\n## Example\nThis \n```\n{\n	background_image: \'https://cdn.meme.am/instances/500x/66927624.jpg\'\n}\n```\nGives you this\n\n![](/assets/img/example_files/background-image-text.png)\n\nBut what is much cooler is saying the background_image field is an image. Like this:\n```\n{\n	$background_image_type: \'image\',\n	background_image: \'https://cdn.meme.am/instances/500x/66927624.jpg\'\n}\n```\n\n\n![](/assets/img/example_files/typedbackgroundimage.png)\n\n## Types\nCurrently there are these types:\n\n### Image\nWill switch to a convenient image uploading control with drag&drop and copy&paste functionality. If amazon s3 is enabled, the uploaded images go directly to amazon.\n\n### Textarea\nSimply creates a textarea to input longer texts\n\n### Slider\nCreates input slider that goes from 0 to 100 by default.\n\n### Colorpicker\nCreates colorpicker that outputs hex color code\n\n### Title\nCreates header out of the property\'s value. Property will be non-editable though\n\n## Label\n`$propertyname_label: \'Coolest property\'` will override the property label\n\n## Hide property\n`$propertyname_hidden: true` will hide the property from the admin\n\n## Size\n`$propertyname_size: 6` will set the grid size to 6 out of 12 parts.\n\n## Info\n`$propertyname_info: \'this will change something\'` will create a tooltip questionmark next to the property.',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Termination is adding information to data fields that is used exclusively by admin interface. You can specify all kinds of properties, such as types, limitations, hide/show things, remove frames, size the input fields and much more</p>\n<p>Generaly, to use any termination, you prepend dollar sign -&#39;$&#39; and add termination property after a underscore. So if you have field <code>name</code>, you can hide it from admin by <code>$name_hidden: true</code>.</p>\n<h2 id="example">Example</h2>\n<p>This </p>\n<pre><code>{\n    background_image: &#39;https://cdn.meme.am/instances/500x/66927624.jpg&#39;\n}\n</code></pre><p>Gives you this</p>\n<p><img src="/assets/img/example_files/background-image-text.png" alt=""></p>\n<p>But what is much cooler is saying the background_image field is an image. Like this:</p>\n<pre><code>{\n    $background_image_type: &#39;image&#39;,\n    background_image: &#39;https://cdn.meme.am/instances/500x/66927624.jpg&#39;\n}\n</code></pre><p><img src="/assets/img/example_files/typedbackgroundimage.png" alt=""></p>\n<h2 id="types">Types</h2>\n<p>Currently there are these types:</p>\n<h3 id="image">Image</h3>\n<p>Will switch to a convenient image uploading control with drag&amp;drop and copy&amp;paste functionality. If amazon s3 is enabled, the uploaded images go directly to amazon.</p>\n<h3 id="textarea">Textarea</h3>\n<p>Simply creates a textarea to input longer texts</p>\n<h3 id="slider">Slider</h3>\n<p>Creates input slider that goes from 0 to 100 by default.</p>\n<h3 id="colorpicker">Colorpicker</h3>\n<p>Creates colorpicker that outputs hex color code</p>\n<h3 id="title">Title</h3>\n<p>Creates header out of the property&#39;s value. Property will be non-editable though</p>\n<h2 id="label">Label</h2>\n<p><code>$propertyname_label: &#39;Coolest property&#39;</code> will override the property label</p>\n<h2 id="hide-property">Hide property</h2>\n<p><code>$propertyname_hidden: true</code> will hide the property from the admin</p>\n<h2 id="size">Size</h2>\n<p><code>$propertyname_size: 6</code> will set the grid size to 6 out of 12 parts.</p>\n<h2 id="info">Info</h2>\n<p><code>$propertyname_info: &#39;this will change something&#39;</code> will create a tooltip questionmark next to the property.</p>\n',
		contents: [
			{
				heading: 'Example',
				level: '2',
				link: 'example'
			},
			{
				heading: 'Types',
				level: '2',
				link: 'types'
			},
			{
				heading: 'Image',
				level: '3',
				link: 'image'
			},
			{
				heading: 'Textarea',
				level: '3',
				link: 'textarea'
			},
			{
				heading: 'Slider',
				level: '3',
				link: 'slider'
			},
			{
				heading: 'Colorpicker',
				level: '3',
				link: 'colorpicker'
			},
			{
				heading: 'Title',
				level: '3',
				link: 'title'
			},
			{
				heading: 'Label',
				level: '2',
				link: 'label'
			},
			{
				heading: 'Hide property',
				level: '2',
				link: 'hide-property'
			},
			{
				heading: 'Size',
				level: '2',
				link: 'size'
			},
			{
				heading: 'Info',
				level: '2',
				link: 'info'
			}
		]
	}
}