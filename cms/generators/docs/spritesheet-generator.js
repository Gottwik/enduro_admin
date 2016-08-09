{
	title: 'Spritesheet generator',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Just place all your images to $$assets/spriteicons and the spritesheet will be generate automatically. \n\nThen just include `@import \'../../_src/_prebuilt/sprites\';` the sprites sass file and you are good to go.\n\n## Usage\nMixin `@include sprite($check-white-group);` Will add the specified icon. Variable name is the original file name\n\n## Retina\nGood idea is to also produce double sized icon with name originalname@2x\n\n![retina sprites](/assets/img/example_files/retinasprites.png)\n\nThan, you can include the icon by `@include retina-sprite($check-white-group);`. Generated stylesheet will decide based on media queries which icon to use.',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Just place all your images to <span class="markdown_folder">assets/spriteicons</span> and the spritesheet will be generate automatically. </p>\n<p>Then just include <code>@import &#39;../../_src/_prebuilt/sprites&#39;;</code> the sprites sass file and you are good to go.</p>\n<h2 id="usage">Usage</h2>\n<p>Mixin <code>@include sprite($check-white-group);</code> Will add the specified icon. Variable name is the original file name</p>\n<h2 id="retina">Retina</h2>\n<p>Good idea is to also produce double sized icon with name originalname@2x</p>\n<p><img src="/assets/img/example_files/retinasprites.png" alt="retina sprites"></p>\n<p>Than, you can include the icon by <code>@include retina-sprite($check-white-group);</code>. Generated stylesheet will decide based on media queries which icon to use.</p>\n',
		contents: [
			{
				heading: 'Usage',
				level: '2',
				link: 'usage'
			},
			{
				heading: 'Retina',
				level: '2',
				link: 'retina'
			}
		]
	}
}