{
	title: 'Introduction to admin',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'So, with enduro.js, the content is stored in flat json-like files, such as this:\n```js\n{\n	title: \'My first blog post!\',\n	text: \'Too bad I have nothing to write\',\n	background-image: \'https://cdn.meme.am/instances/500x/66927624.jpg\'\n}\n```\n\nWhich will display this out of the box in the admin interface\n![](/assets/img/example_files/admin.png)\n\n## Awesome features\nSo you have your content defined in [content files](/docs/content-files). You can edit these content files out-of-the-box with enduro, but with [termination](/docs/termination) you can customize how the content filed is edited by user.\n\n![](https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1470382533_Aug-05-2016 09-33-55.gif)\n\n## Accessing admin\nIf you run enduro on your local machine you can access admin on `http://localhost:5000/admin`. If you are running your enduro project on a server, say on heroku, you can access it at `www.yourdomain.com/admin`\n\n## Adding users\nTo use admin interface, you must set up at least one administrator user. Do it by running `$ enduro addadmin username password`',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>So, with enduro.js, the content is stored in flat json-like files, such as this:</p>\n<pre><code class="lang-js">{\n    title: &#39;My first blog post!&#39;,\n    text: &#39;Too bad I have nothing to write&#39;,\n    background-image: &#39;https://cdn.meme.am/instances/500x/66927624.jpg&#39;\n}\n</code></pre>\n<p>Which will display this out of the box in the admin interface\n<img src="/assets/img/example_files/admin.png" alt=""></p>\n<h2 id="awesome-features">Awesome features</h2>\n<p>So you have your content defined in <a href="/docs/content-files">content files</a>. You can edit these content files out-of-the-box with enduro, but with <a href="/docs/termination">termination</a> you can customize how the content filed is edited by user.</p>\n<p><img src="https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1470382533_Aug-05-2016 09-33-55.gif" alt=""></p>\n<h2 id="accessing-admin">Accessing admin</h2>\n<p>If you run enduro on your local machine you can access admin on <code>http://localhost:5000/admin</code>. If you are running your enduro project on a server, say on heroku, you can access it at <code>www.yourdomain.com/admin</code></p>\n<h2 id="adding-users">Adding users</h2>\n<p>To use admin interface, you must set up at least one administrator user. Do it by running <code>$ enduro addadmin username password</code></p>\n',
		contents: [
			{
				heading: 'Awesome features',
				level: '2',
				link: 'awesome-features'
			},
			{
				heading: 'Accessing admin',
				level: '2',
				link: 'accessing-admin'
			},
			{
				heading: 'Adding users',
				level: '2',
				link: 'adding-users'
			}
		]
	}
}