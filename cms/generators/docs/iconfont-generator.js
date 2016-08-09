{
	title: 'Iconfont generators',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: '## Iconfont generator\nJust place one-icon-per file `.svg`s in $$assets/fonticons. Enduro will generate icon font. All you need to do is include the scss file that contains all the icons:\n```\n@import \'../../_src/_prebuilt/icons\';\n```\n\n### Using generated iconfont\nOnce you have included the generated scss file, you can use the icons in two ways:\n\nIn sass\n```css\n@include icon(user)\n```\n\nIn html\n```\n<i class="icon-user></i>\n```\n\n### Making icons\n![making svg icons](/assets/img/example_files/makingicons.png)\n\nI made my icons in illustrator. You can get this [sample file](/assets/img/example_files/icons_20.ai). To export the file, just choose \'use artboards\' option.\n\n![making svg icons](/assets/img/example_files/useartboards.png)\n\nThanks to [https://github.com/nfroidure/gulp-iconfont](Gulp-iconfont)',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<h2 id="iconfont-generator">Iconfont generator</h2>\n<p>Just place one-icon-per file <code>.svg</code>s in <span class="markdown_folder">assets/fonticons.</span> Enduro will generate icon font. All you need to do is include the scss file that contains all the icons:</p>\n<pre><code>@import &#39;../../_src/_prebuilt/icons&#39;;\n</code></pre><h3 id="using-generated-iconfont">Using generated iconfont</h3>\n<p>Once you have included the generated scss file, you can use the icons in two ways:</p>\n<p>In sass</p>\n<pre><code class="lang-css">@include icon(user)\n</code></pre>\n<p>In html</p>\n<pre><code>&lt;i class=&quot;icon-user&gt;&lt;/i&gt;\n</code></pre><h3 id="making-icons">Making icons</h3>\n<p><img src="/assets/img/example_files/makingicons.png" alt="making svg icons"></p>\n<p>I made my icons in illustrator. You can get this <a href="/assets/img/example_files/icons_20.ai">sample file</a>. To export the file, just choose &#39;use artboards&#39; option.</p>\n<p><img src="/assets/img/example_files/useartboards.png" alt="making svg icons"></p>\n<p>Thanks to <a href="Gulp-iconfont">https://github.com/nfroidure/gulp-iconfont</a></p>\n',
		contents: [
			{
				heading: 'Iconfont generator',
				level: '2',
				link: 'iconfont-generator'
			},
			{
				heading: 'Using generated iconfont',
				level: '3',
				link: 'using-generated-iconfont'
			},
			{
				heading: 'Making icons',
				level: '3',
				link: 'making-icons'
			}
		]
	}
}