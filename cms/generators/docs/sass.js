{
	title: 'Sass',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Enduro comes with sass. All `.scss` files that are located directly in $$assets/css , not in subfolders gets compiled. The compiled `.css` files end up in $$_src/assets/css so they can be imported like this:\n```\n<link rel="stylesheet" href="/assets/css/main.css">\n```\n\n## Globbing\nTo import whole directory, just do: `@import \'mixins/*\';`\n\nThanks to [https://github.com/mathisonian/gulp-sass-bulk-import](Gulp-sass-bulk-import) for this\n\n## Autoprefixer\nAutoprefixer is present with these settings\n```\n{\n	browsers: [\'last 2 versions\'],\n	cascade: false,\n}\n```',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Enduro comes with sass. All <code>.scss</code> files that are located directly in <span class="markdown_folder">assets/css</span> , not in subfolders gets compiled. The compiled <code>.css</code> files end up in <span class="markdown_folder">_src/assets/css</span> so they can be imported like this:</p>\n<pre><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;/assets/css/main.css&quot;&gt;\n</code></pre><h2 id="globbing">Globbing</h2>\n<p>To import whole directory, just do: <code>@import &#39;mixins/*&#39;;</code></p>\n<p>Thanks to <a href="Gulp-sass-bulk-import">https://github.com/mathisonian/gulp-sass-bulk-import</a> for this</p>\n<h2 id="autoprefixer">Autoprefixer</h2>\n<p>Autoprefixer is present with these settings</p>\n<pre><code>{\n    browsers: [&#39;last 2 versions&#39;],\n    cascade: false,\n}\n</code></pre>',
		contents: [
			{
				heading: 'Globbing',
				level: '2',
				link: 'globbing'
			},
			{
				heading: 'Autoprefixer',
				level: '2',
				link: 'autoprefixer'
			}
		]
	}
}