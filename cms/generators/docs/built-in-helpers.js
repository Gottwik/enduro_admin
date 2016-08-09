{
	title: 'Built in helpers',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: '## Add\nAdds two numbers together\n```html\n{{add @index 2}} <<< outputs @index + 2\n```\ncan take multiple arguments\n```\n{{add 1 2 3}} outputs 6\n```\n\n## Class\nRender variable name if variable is true\n```html\n{{class \'gradient\'}} <<< will render \'gradient\' if class context.gradient is truthy\n```\ncan take multiple arguments\n```\n{{class \'gradient\' \'dark\' \'border\'}}\n```\nNote: converts underscores to dashes\n\n## Compare\nCompares two values and prints out one of two strings based on outcome of the comparison\n```\n{{compare age 20 \'this dude is exactly 20 years old\' \'hes not 20 years old}}\n```\n\n## Default\nPrints something in case that the provided variable is falsy\n```html\n{{default age 20}} <<< if no age is provided 20 will be used\n```',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<h2 id="add">Add</h2>\n<p>Adds two numbers together</p>\n<pre><code class="lang-html">{{add @index 2}} &lt;&lt;&lt; outputs @index + 2\n</code></pre>\n<p>can take multiple arguments</p>\n<pre><code>{{add 1 2 3}} outputs 6\n</code></pre><h2 id="class">Class</h2>\n<p>Render variable name if variable is true</p>\n<pre><code class="lang-html">{{class &#39;gradient&#39;}} &lt;&lt;&lt; will render &#39;gradient&#39; if class context.gradient is truthy\n</code></pre>\n<p>can take multiple arguments</p>\n<pre><code>{{class &#39;gradient&#39; &#39;dark&#39; &#39;border&#39;}}\n</code></pre><p>Note: converts underscores to dashes</p>\n<h2 id="compare">Compare</h2>\n<p>Compares two values and prints out one of two strings based on outcome of the comparison</p>\n<pre><code>{{compare age 20 &#39;this dude is exactly 20 years old&#39; &#39;hes not 20 years old}}\n</code></pre><h2 id="default">Default</h2>\n<p>Prints something in case that the provided variable is falsy</p>\n<pre><code class="lang-html">{{default age 20}} &lt;&lt;&lt; if no age is provided 20 will be used\n</code></pre>\n',
		contents: [
			{
				heading: 'Add',
				level: '2',
				link: 'add'
			},
			{
				heading: 'Class',
				level: '2',
				link: 'class'
			},
			{
				heading: 'Compare',
				level: '2',
				link: 'compare'
			},
			{
				heading: 'Default',
				level: '2',
				link: 'default'
			}
		]
	}
}