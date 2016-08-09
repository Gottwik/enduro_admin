{
	title: 'Templatitator',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Templatitator is currently kindof the most complex feature of enduro.js, yet I\'ve used it in almost every project.\n\n## Example\nLet us have a list of animals:\n```js\n{\n	animals: [\n		{\n			animal_type: \'Dog\',\n			name: \'Rufus\',\n			barks: true\n		},\n		{\n			animal_type: \'Parrot\',\n			name: \'Pedro\',\n			talks: false\n		},\n	]\n}\n```\n\nand you want to be able to add either a __dog__ or a __parrot__ to the list. Notice their properties are different, dog can bark and parrot can talk. What you do is you create templates for each of these animals:\n```js\n{\n	animal_types: {\n		dog: {\n			animal_type: \'dog\',\n			name: \'\',\n			barks: false\n		},\n		parrot: {\n			animal_type: \'parrot\',\n			name: \'\',\n			talks: false\n		},\n	}\n}\n```\n\nAnd then use the cool __templatitator__ feature to enable user to select from these two animal types:\n```\n{\n	$animals_templatitator: \'@@animal_types\',\n	animals: []\n}\n```\n\nNow user has a nice way to add either a parrot or a dog to his animal list:\n\n![](/assets/img/example_files/templatitator.gif)\n\n## Templates folder\nWhatever you place in $$global/templates folder will not be visible in admin ui, what is very convenient for storing templatitator templates, such as the animal types above.',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Templatitator is currently kindof the most complex feature of enduro.js, yet I&#39;ve used it in almost every project.</p>\n<h2 id="example">Example</h2>\n<p>Let us have a list of animals:</p>\n<pre><code class="lang-js">{\n    animals: [\n        {\n            animal_type: &#39;Dog&#39;,\n            name: &#39;Rufus&#39;,\n            barks: true\n        },\n        {\n            animal_type: &#39;Parrot&#39;,\n            name: &#39;Pedro&#39;,\n            talks: false\n        },\n    ]\n}\n</code></pre>\n<p>and you want to be able to add either a <strong>dog</strong> or a <strong>parrot</strong> to the list. Notice their properties are different, dog can bark and parrot can talk. What you do is you create templates for each of these animals:</p>\n<pre><code class="lang-js">{\n    animal_types: {\n        dog: {\n            animal_type: &#39;dog&#39;,\n            name: &#39;&#39;,\n            barks: false\n        },\n        parrot: {\n            animal_type: &#39;parrot&#39;,\n            name: &#39;&#39;,\n            talks: false\n        },\n    }\n}\n</code></pre>\n<p>And then use the cool <strong>templatitator</strong> feature to enable user to select from these two animal types:</p>\n<pre><code>{\n    $animals_templatitator: &#39;@@animal_types&#39;,\n    animals: []\n}\n</code></pre><p>Now user has a nice way to add either a parrot or a dog to his animal list:</p>\n<p><img src="/assets/img/example_files/templatitator.gif" alt=""></p>\n<h2 id="templates-folder">Templates folder</h2>\n<p>Whatever you place in <span class="markdown_folder">global/templates</span> folder will not be visible in admin ui, what is very convenient for storing templatitator templates, such as the animal types above.</p>\n',
		contents: [
			{
				heading: 'Example',
				level: '2',
				link: 'example'
			},
			{
				heading: 'Templates folder',
				level: '2',
				link: 'templates-folder'
			}
		]
	}
}