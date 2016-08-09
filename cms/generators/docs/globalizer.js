{
	title: 'Globalizer',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Globalizer links parts of contexts to other parts by refencing them with \'@@\' before the object path\n\n## Example\n\nwe have __children__:\n```js\n{\n	children: [\n		{\n			name: \'Samuel\'\n			favorite_toy: \'Mindstorms\'\n		},\n		{\n			name: \'Tim\'\n			favorite_toy: \'Duplo\'\n		},\n	]\n}\n```\n\nand we have __toys__:\n```js\n{\n	toys: {\n		mindstorms: {\n			website: \'http://www.lego.com/en-us/mindstorms\'\n		},\n		duplo: {\n			website: \'http://www.lego.com/en-us/duplo\'\n		}\n	}\n}\n```\n\nglobalizer offers a way to connect these two entities.\n```js\n{\n	children: [\n		{\n			name: \'Samuel\',\n			favorite_toy: \'@@toys.mindstorms\'\n		},\n		{\n			name: \'Tim\',\n			favorite_toy: \'@@toys.duplo\'\n		},\n	]\n}\n```\n\nNow we can comfortably access website of the toy by:\n```html\n{{favorite_toy.website}}\n```\n\nNot only that, the non-technical person administering the content will be able to just pick from available options:\n\n![gif showing globalizer](/assets/img/example_files/globalizer.gif)\n\n## Chaining globalizers\nYou can chain as many globalizers as you want. For example, you can do this:\n```\n{\n	children: {\n		samuel: {\n			name: \'Samuel\',\n			favorite_toy: \'@@global.toys.mindstorms\'\n		},\n		tim: {\n			name: \'Tim\',\n			favorite_toy: \'@@global.toys.duplo\'\n		},\n	},\n	toys: {\n		mindstorms: {\n			website: \'http://www.lego.com/en-us/mindstorms\',\n			store: \'@@global.shops.toyrus\'\n		},\n		duplo: {\n			website: \'http://www.lego.com/en-us/duplo\'\n		}\n	},\n	shops: {\n		toyrus: {\n			has_parking: true\n		}\n	}\n}\n```\n\nNow you can find out if the store where Samuel\'s favorite toy is sold has parking by:\n```\n	{{global.children.samuel.favorite_toy.store.large}}\n```\n\n## Limitations\nOne current limitation is that you can\'t cycle the linking. You can\'t really do this\n```\n{\n	toys: {\n		mindstorms: {\n			website: \'http://www.lego.com/en-us/mindstorms\',\n			favorite_child: \'@@global.children\'\n		},\n		duplo: {\n			website: \'http://www.lego.com/en-us/duplo\'\n		}\n	},\n	children: {\n		samuel: {\n			name: \'Samuel\',\n			favorite_toy: \'@@global.toys.mindstorms\'\n		},\n		tim: {\n			name: \'Tim\',\n			favorite_toy: \'@@global.toys.duplo\'\n		},\n	}\n}\n\n```',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Globalizer links parts of contexts to other parts by refencing them with &#39;@@&#39; before the object path</p>\n<h2 id="example">Example</h2>\n<p>we have <strong>children</strong>:</p>\n<pre><code class="lang-js">{\n    children: [\n        {\n            name: &#39;Samuel&#39;\n            favorite_toy: &#39;Mindstorms&#39;\n        },\n        {\n            name: &#39;Tim&#39;\n            favorite_toy: &#39;Duplo&#39;\n        },\n    ]\n}\n</code></pre>\n<p>and we have <strong>toys</strong>:</p>\n<pre><code class="lang-js">{\n    toys: {\n        mindstorms: {\n            website: &#39;http://www.lego.com/en-us/mindstorms&#39;\n        },\n        duplo: {\n            website: &#39;http://www.lego.com/en-us/duplo&#39;\n        }\n    }\n}\n</code></pre>\n<p>globalizer offers a way to connect these two entities.</p>\n<pre><code class="lang-js">{\n    children: [\n        {\n            name: &#39;Samuel&#39;,\n            favorite_toy: &#39;@@toys.mindstorms&#39;\n        },\n        {\n            name: &#39;Tim&#39;,\n            favorite_toy: &#39;@@toys.duplo&#39;\n        },\n    ]\n}\n</code></pre>\n<p>Now we can comfortably access website of the toy by:</p>\n<pre><code class="lang-html">{{favorite_toy.website}}\n</code></pre>\n<p>Not only that, the non-technical person administering the content will be able to just pick from available options:</p>\n<p><img src="/assets/img/example_files/globalizer.gif" alt="gif showing globalizer"></p>\n<h2 id="chaining-globalizers">Chaining globalizers</h2>\n<p>You can chain as many globalizers as you want. For example, you can do this:</p>\n<pre><code>{\n    children: {\n        samuel: {\n            name: &#39;Samuel&#39;,\n            favorite_toy: &#39;@@global.toys.mindstorms&#39;\n        },\n        tim: {\n            name: &#39;Tim&#39;,\n            favorite_toy: &#39;@@global.toys.duplo&#39;\n        },\n    },\n    toys: {\n        mindstorms: {\n            website: &#39;http://www.lego.com/en-us/mindstorms&#39;,\n            store: &#39;@@global.shops.toyrus&#39;\n        },\n        duplo: {\n            website: &#39;http://www.lego.com/en-us/duplo&#39;\n        }\n    },\n    shops: {\n        toyrus: {\n            has_parking: true\n        }\n    }\n}\n</code></pre><p>Now you can find out if the store where Samuel&#39;s favorite toy is sold has parking by:</p>\n<pre><code>    {{global.children.samuel.favorite_toy.store.large}}\n</code></pre><h2 id="limitations">Limitations</h2>\n<p>One current limitation is that you can&#39;t cycle the linking. You can&#39;t really do this</p>\n<pre><code>{\n    toys: {\n        mindstorms: {\n            website: &#39;http://www.lego.com/en-us/mindstorms&#39;,\n            favorite_child: &#39;@@global.children&#39;\n        },\n        duplo: {\n            website: &#39;http://www.lego.com/en-us/duplo&#39;\n        }\n    },\n    children: {\n        samuel: {\n            name: &#39;Samuel&#39;,\n            favorite_toy: &#39;@@global.toys.mindstorms&#39;\n        },\n        tim: {\n            name: &#39;Tim&#39;,\n            favorite_toy: &#39;@@global.toys.duplo&#39;\n        },\n    }\n}\n</code></pre>',
		contents: [
			{
				heading: 'Example',
				level: '2',
				link: 'example'
			},
			{
				heading: 'Chaining globalizers',
				level: '2',
				link: 'chaining-globalizers'
			},
			{
				heading: 'Limitations',
				level: '2',
				link: 'limitations'
			}
		]
	}
}