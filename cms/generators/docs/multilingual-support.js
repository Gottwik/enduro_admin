{
	title: 'Multilingual support',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Enduro comes with multilingual support built-in and easy to set up. Just run `$ enduro addculture en de` and you can add translations\n\n![](/assets/img/example_files/babel.gif)\n\n## Links\nAfter you\'ve added cultures, the default homepage will be www.yourdomain.com/en. If you had a page named info, it\'s url will now be www.yourdomain.com/en/info.\n\n## Admin interface\nNo additional setup necessary.\n\n## Default language\nIf no translation is provided, the first language is used.\n\n## Removing, reordering languages\nCurrently there is no cli command that will do this for you, but it\'s super easy to edit the settings file manually. It\'s located in $$cms/config/babel.js and look like this:\n```\n{\n	cultures: [\n		\'en\',\n		\'de\'\n	]\n}\n```',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Enduro comes with multilingual support built-in and easy to set up. Just run <code>$ enduro addculture en de</code> and you can add translations</p>\n<p><img src="/assets/img/example_files/babel.gif" alt=""></p>\n<h2 id="links">Links</h2>\n<p>After you&#39;ve added cultures, the default homepage will be www.yourdomain.com/en. If you had a page named info, it&#39;s url will now be www.yourdomain.com/en/info.</p>\n<h2 id="admin-interface">Admin interface</h2>\n<p>No additional setup necessary.</p>\n<h2 id="default-language">Default language</h2>\n<p>If no translation is provided, the first language is used.</p>\n<h2 id="removing-reordering-languages">Removing, reordering languages</h2>\n<p>Currently there is no cli command that will do this for you, but it&#39;s super easy to edit the settings file manually. It&#39;s located in <span class="markdown_folder">cms/config/babel.js</span> and look like this:</p>\n<pre><code>{\n    cultures: [\n        &#39;en&#39;,\n        &#39;de&#39;\n    ]\n}\n</code></pre>',
		contents: [
			{
				heading: 'Links',
				level: '2',
				link: 'links'
			},
			{
				heading: 'Admin interface',
				level: '2',
				link: 'admin-interface'
			},
			{
				heading: 'Default language',
				level: '2',
				link: 'default-language'
			},
			{
				heading: 'Removing, reordering languages',
				level: '2',
				link: 'removing-reordering-languages'
			}
		]
	}
}