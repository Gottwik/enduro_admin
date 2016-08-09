{
	title: 'Content files',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Content is stored in content files. Content files are in $$cms folder.\n\n## Linking content to template\nScoping is very simple. Every page(.hbs file) from $$pages folder has access to file with the same name in $$cms folder.\n\n## Global content\nThere is a $$cms/global subfolder. Every content file in this directory is accessible to all pages. Content from global folder is in global object when referencing from handlebars template.\n\n## Basic example\n$$cms/index.js\n```js\n{\n	name: \'martin\'\n}\n```\n\n$$cms/global/car.js\n```js\n{\n	car: \'toyota\'\n}\n```\n\n$$pagez/index.hbs\n```html\n<div class="user">{{name}}</div>\n<div class="car">{{global.car}}</div>\n```',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Content is stored in content files. Content files are in <span class="markdown_folder">cms</span> folder.</p>\n<h2 id="linking-content-to-template">Linking content to template</h2>\n<p>Scoping is very simple. Every page(.hbs file) from <span class="markdown_folder">pages</span> folder has access to file with the same name in <span class="markdown_folder">cms</span> folder.</p>\n<h2 id="global-content">Global content</h2>\n<p>There is a <span class="markdown_folder">cms/global</span> subfolder. Every content file in this directory is accessible to all pages. Content from global folder is in global object when referencing from handlebars template.</p>\n<h2 id="basic-example">Basic example</h2>\n<p><span class="markdown_folder">cms/index.js</span></p>\n<pre><code class="lang-js">{\n    name: &#39;martin&#39;\n}\n</code></pre>\n<p><span class="markdown_folder">cms/global/car.js</span></p>\n<pre><code class="lang-js">{\n    car: &#39;toyota&#39;\n}\n</code></pre>\n<p><span class="markdown_folder">pagez/index.hbs</span></p>\n<pre><code class="lang-html">&lt;div class=&quot;user&quot;&gt;{{name}}&lt;/div&gt;\n&lt;div class=&quot;car&quot;&gt;{{global.car}}&lt;/div&gt;\n</code></pre>\n',
		contents: [
			{
				heading: 'Linking content to template',
				level: '2',
				link: 'linking-content-to-template'
			},
			{
				heading: 'Global content',
				level: '2',
				link: 'global-content'
			},
			{
				heading: 'Basic example',
				level: '2',
				link: 'basic-example'
			}
		]
	}
}