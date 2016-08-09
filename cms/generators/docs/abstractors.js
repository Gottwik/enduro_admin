{
	title: 'Abstractors',
	$doc_type: 'textarea',
	doc: 'Abstractors are awesome. They provide a way to manipulate context data before rendering, such as applying markdown, or fetching external content, for example twitter post content based on id.\n\n## Usage\n\nLet\'s start with a context file like this:\n```\n{\n  doc: \'lets have some __bold__ text\'\n}\n```\n\nTo replace the `__bold__` with `<strong>bold</bold>` we will create a doc.js file in /app/abstractors folder that will look like this:\n\n```\nvar abstractor = function () {}\n\nabstractor.prototype.init = function(context) {\n	return new Promise(function(resolve, reject) {\n\n		// initialize abstractor\n		resolve()\n	})\n}\n\nabstractor.prototype.abstract = function(context) {\n  return new Promise(function(resolve, reject) {\n\n    // will hide the generatod context from admin interface\n    context[\'$marked_doc_hidden\'] = true\n\n    // will replace __strong__ to <strong>strong</strong>\n    context.marked_doc = context.doc.replace(/__([^*]+)__/g, \'<strong>$1</strong>\')\n\n    // abstract directive\n    return resolve()\n\n  })\n}\n\nmodule.exports = new abstractor()\n```\n\nsimple enough, this will add a ready to be used marked_doc to our context like this:\n\n```\n{\n  doc: \'lets have some __bold__ text\',\n  marked_doc: \'lets have some <strong>bold</strong> text\'\n}\n```\n\n## Use cases\nAbstractors are used on this very page to add markdown by using [marked](https://github.com/chjj/marked). Apart from this I used abstractors to fetch twitter post based on id.\n\n## Initialization\nEvery abstractor need to export two functions: init() and abstract(). Init runs only once per enduro render event, while abstract run for every key named as the abstractor.',
	$marked_doc_hidden: true,
	marked_doc: '<p>Abstractors are awesome. They provide a way to manipulate context data before rendering, such as applying markdown, or fetching external content, for example twitter post content based on id.</p>\n<h2 id="usage">Usage</h2>\n<p>Let&#39;s start with a context file like this:</p>\n<pre><code>{\n  doc: &#39;lets have some __bold__ text&#39;\n}\n</code></pre><p>To replace the <code>__bold__</code> with <code>&lt;strong&gt;bold&lt;/bold&gt;</code> we will create a doc.js file in /app/abstractors folder that will look like this:</p>\n<pre><code>var abstractor = function () {}\n\nabstractor.prototype.init = function(context) {\n    return new Promise(function(resolve, reject) {\n\n        // initialize abstractor\n        resolve()\n    })\n}\n\nabstractor.prototype.abstract = function(context) {\n  return new Promise(function(resolve, reject) {\n\n    // will hide the generatod context from admin interface\n    context[&#39;$marked_doc_hidden&#39;] = true\n\n    // will replace __strong__ to &lt;strong&gt;strong&lt;/strong&gt;\n    context.marked_doc = context.doc.replace(/__([^*]+)__/g, &#39;&lt;strong&gt;$1&lt;/strong&gt;&#39;)\n\n    // abstract directive\n    return resolve()\n\n  })\n}\n\nmodule.exports = new abstractor()\n</code></pre><p>simple enough, this will add a ready to be used marked_doc to our context like this:</p>\n<pre><code>{\n  doc: &#39;lets have some __bold__ text&#39;,\n  marked_doc: &#39;lets have some &lt;strong&gt;bold&lt;/strong&gt; text&#39;\n}\n</code></pre><h2 id="use-cases">Use cases</h2>\n<p>Abstractors are used on this very page to add markdown by using <a href="https://github.com/chjj/marked">marked</a>. Apart from this I used abstractors to fetch twitter post based on id.</p>\n<h2 id="initialization">Initialization</h2>\n<p>Every abstractor need to export two functions: init() and abstract(). Init runs only once per enduro render event, while abstract run for every key named as the abstractor.</p>\n',
	contents: [
		{
			heading: 'Usage',
			level: '2'
		},
		{
			heading: 'Use cases',
			level: '2'
		},
		{
			heading: 'Initialization',
			level: '2'
		}
	],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Abstractors are awesome. They provide a way to manipulate context data before rendering, such as applying markdown, or fetching external content, for example twitter post content based on id.</p>\n<h2 id="usage">Usage</h2>\n<p>Let&#39;s start with a context file like this:</p>\n<pre><code>{\n  doc: &#39;lets have some __bold__ text&#39;\n}\n</code></pre><p>To replace the <code>__bold__</code> with <code>&lt;strong&gt;bold&lt;/bold&gt;</code> we will create a doc.js file in /app/abstractors folder that will look like this:</p>\n<pre><code>var abstractor = function () {}\n\nabstractor.prototype.init = function(context) {\n    return new Promise(function(resolve, reject) {\n\n        // initialize abstractor\n        resolve()\n    })\n}\n\nabstractor.prototype.abstract = function(context) {\n  return new Promise(function(resolve, reject) {\n\n    // will hide the generatod context from admin interface\n    context[&#39;$marked_doc_hidden&#39;] = true\n\n    // will replace __strong__ to &lt;strong&gt;strong&lt;/strong&gt;\n    context.marked_doc = context.doc.replace(/__([^*]+)__/g, &#39;&lt;strong&gt;$1&lt;/strong&gt;&#39;)\n\n    // abstract directive\n    return resolve()\n\n  })\n}\n\nmodule.exports = new abstractor()\n</code></pre><p>simple enough, this will add a ready to be used marked_doc to our context like this:</p>\n<pre><code>{\n  doc: &#39;lets have some __bold__ text&#39;,\n  marked_doc: &#39;lets have some &lt;strong&gt;bold&lt;/strong&gt; text&#39;\n}\n</code></pre><h2 id="use-cases">Use cases</h2>\n<p>Abstractors are used on this very page to add markdown by using <a href="https://github.com/chjj/marked">marked</a>. Apart from this I used abstractors to fetch twitter post based on id.</p>\n<h2 id="initialization">Initialization</h2>\n<p>Every abstractor need to export two functions: init() and abstract(). Init runs only once per enduro render event, while abstract run for every key named as the abstractor.</p>\n',
		contents: [
			{
				heading: 'Usage',
				level: '2',
				link: 'usage'
			},
			{
				heading: 'Use cases',
				level: '2',
				link: 'use-cases'
			},
			{
				heading: 'Initialization',
				level: '2',
				link: 'initialization'
			}
		]
	}
}