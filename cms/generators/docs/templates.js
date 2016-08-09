{
	title: 'Working with templates',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: '## Handlebars\nEnduro is built around [http://handlebarsjs.com/](handlebars) templates.\n\n## Templates\nTo include a variable in your template, wrap it in two sets of curly braces. Like this:\n```\n<div>\n	<h2>{{title}}</h2>\n	<h2>{{text}}</h2>\n</div>\n```\n\n## Context\nSo where does the title and text come from? For every page in the $$pages folder there is a javascript object file in $$cms folder. For this case, the context file will look like this\n```js\n{\n	title: \'enduro\',\n	text: \'everybody loves enduro\'\n}\n```\n\n## Components\nOne good idea is to split up the page into smaller parts - components. For example, let\'s create a footer component and save it in the `components` folder:\n```\n<footer>\n	2016 enduro.js\n</footer>\n```\n\nNow you can comfortably include it in the homepage by adding `{{>footer}}`.\n\nNote: whatever folder structure there is in the components directory, components are registered by the file name only.\n\n## Block components\nAnother option is to create a block component, which wraps around whatever is inside. Let\'s create a body component that looks like this:\n```\n<header>\n	2016 enduro.js\n</header>\n\n{{>@partial-block}}\n\n<footer>\n	2016 enduro.js\n</footer>\n```\n\nNow it\'s ready to be used like this:\n```html\n{{#>body}}\n	Content goes here\n{{/body}}\n```\n\n## Helpers\nHandlebars is logicless templating engine - so no mixing in code. Only way to built complex templates are using helpers.\n\nFor example: `{{lorem 20}}` will print random 20 lorem words.\n\nHandlebars itself has some built-in helpers such as {{#if}} {{#each}} - Checkout the list here: [Handlebars helpers](http://handlebarsjs.com/builtin_helpers.html)\n\n### Built in helpers\nI decided to include some handy helpers directly in enduro. Check out the list here: [Built-in helpers](/docs/built-in-helpers)\n\n### Custom helpers\nYou can, and probably will have to write your own helpers. Just add .js files in assets/hbs_helpers.\n\nCheck out this slug helper:\n\n```\n// * ———————————————————————————————————————————————————————— * //\n// *    slug helper\n// * ———————————————————————————————————————————————————————— * //\n\n__templating_engine.registerHelper("slug", function (input) {\n	return input.toString().toLowerCase()\n		.replace(/s+/g, \'-\') // Replace spaces with -\n		.replace(/[^w-]+/g, \'\') // Remove all non-word chars\n		.replace(/--+/g, \'-\') // Replace multiple - with single -\n		.replace(/^-+/, \'\') // Trim - from start of text\n		.replace(/-+$/, \'\') // Trim - from end of text\n});\n```',
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<h2 id="handlebars">Handlebars</h2>\n<p>Enduro is built around <a href="handlebars">http://handlebarsjs.com/</a> templates.</p>\n<h2 id="templates">Templates</h2>\n<p>To include a variable in your template, wrap it in two sets of curly braces. Like this:</p>\n<pre><code>&lt;div&gt;\n    &lt;h2&gt;{{title}}&lt;/h2&gt;\n    &lt;h2&gt;{{text}}&lt;/h2&gt;\n&lt;/div&gt;\n</code></pre><h2 id="context">Context</h2>\n<p>So where does the title and text come from? For every page in the <span class="markdown_folder">pages</span> folder there is a javascript object file in <span class="markdown_folder">cms</span> folder. For this case, the context file will look like this</p>\n<pre><code class="lang-js">{\n    title: &#39;enduro&#39;,\n    text: &#39;everybody loves enduro&#39;\n}\n</code></pre>\n<h2 id="components">Components</h2>\n<p>One good idea is to split up the page into smaller parts - components. For example, let&#39;s create a footer component and save it in the <code>components</code> folder:</p>\n<pre><code>&lt;footer&gt;\n    2016 enduro.js\n&lt;/footer&gt;\n</code></pre><p>Now you can comfortably include it in the homepage by adding <code>{{&gt;footer}}</code>.</p>\n<p>Note: whatever folder structure there is in the components directory, components are registered by the file name only.</p>\n<h2 id="block-components">Block components</h2>\n<p>Another option is to create a block component, which wraps around whatever is inside. Let&#39;s create a body component that looks like this:</p>\n<pre><code>&lt;header&gt;\n    2016 enduro.js\n&lt;/header&gt;\n\n{{&gt;@partial-block}}\n\n&lt;footer&gt;\n    2016 enduro.js\n&lt;/footer&gt;\n</code></pre><p>Now it&#39;s ready to be used like this:</p>\n<pre><code class="lang-html">{{#&gt;body}}\n    Content goes here\n{{/body}}\n</code></pre>\n<h2 id="helpers">Helpers</h2>\n<p>Handlebars is logicless templating engine - so no mixing in code. Only way to built complex templates are using helpers.</p>\n<p>For example: <code>{{lorem 20}}</code> will print random 20 lorem words.</p>\n<p>Handlebars itself has some built-in helpers such as {{#if}} {{#each}} - Checkout the list here: <a href="http://handlebarsjs.com/builtin_helpers.html">Handlebars helpers</a></p>\n<h3 id="built-in-helpers">Built in helpers</h3>\n<p>I decided to include some handy helpers directly in enduro. Check out the list here: <a href="/docs/built-in-helpers">Built-in helpers</a></p>\n<h3 id="custom-helpers">Custom helpers</h3>\n<p>You can, and probably will have to write your own helpers. Just add .js files in assets/hbs_helpers.</p>\n<p>Check out this slug helper:</p>\n<pre><code>// * ———————————————————————————————————————————————————————— * //\n// *    slug helper\n// * ———————————————————————————————————————————————————————— * //\n\n__templating_engine.registerHelper(&quot;slug&quot;, function (input) {\n    return input.toString().toLowerCase()\n        .replace(/s+/g, &#39;-&#39;) // Replace spaces with -\n        .replace(/[^w-]+/g, &#39;&#39;) // Remove all non-word chars\n        .replace(/--+/g, &#39;-&#39;) // Replace multiple - with single -\n        .replace(/^-+/, &#39;&#39;) // Trim - from start of text\n        .replace(/-+$/, &#39;&#39;) // Trim - from end of text\n});\n</code></pre>',
		contents: [
			{
				heading: 'Handlebars',
				level: '2',
				link: 'handlebars'
			},
			{
				heading: 'Templates',
				level: '2',
				link: 'templates'
			},
			{
				heading: 'Context',
				level: '2',
				link: 'context'
			},
			{
				heading: 'Components',
				level: '2',
				link: 'components'
			},
			{
				heading: 'Block components',
				level: '2',
				link: 'block-components'
			},
			{
				heading: 'Helpers',
				level: '2',
				link: 'helpers'
			},
			{
				heading: 'Built in helpers',
				level: '3',
				link: 'built-in-helpers'
			},
			{
				heading: 'Custom helpers',
				level: '3',
				link: 'custom-helpers'
			}
		]
	}
}