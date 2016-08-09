{
	title: 'Cli',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'In the end, Enduro is a command line tool, and is meant to be used from a terminal.\n\n## Popular commands\n\n`$ enduro` - will start enduro in __development__ mode\n\n`$ enduro start` - will start enduro in __production__ mode\n\n`$ enduro -nr` - norefresh tag. Same as just `enduro` but will not open the browser for the first time\n\n`$ enduro addadmin username password` - will add admin user to the admin interface.\n\n## Running enduro\n\n`$ enduro -noadmin` - will start enduro without admin interface.\n\n`$ enduro -nojswatch` - development mode without watching for js changes\n\n`$ enduro -nocmswatch` - development mode without watching cms files\n\n## Creating projects\n\n`$ enduro create projectname` - will create new folder $$projectname and put the default scaffolding in there\n\n## Securing project\n\n`$ enduro secure passphrase` - will create a simple security check for all pages. You know, some clients don\'t like the half-built website live.\n\n## Building a project\n\n`$ enduro build` - will build sass and requirejs\n\n`$ enduro build main-dev` - will build requirejs with main-dev.js. This way you can have more configuration files for requirejs\n\n## Validating\n\n`$ enduro check` - Runs scss lint and html validator\n\n## Adding cultures\n\n`$ enduro addculture en` - Adds culture to cms files. Check out babel for more info [Babel](/docs/babel)\n\n`$ enduro addculture en de fr` - Adds multiple cultures in one call\n\n## Juicebox\n__Juicebox__ serves as content versioning/migrating/backup tool. __Juicebar__ is the remote server where the backup files are stored.\n\n`$ enduro juice pull` - will download the freshest version of all content files, but will not replace newer local files\n\n`$ enduro juice pull -f` - will download the freshest version of all content files and will replace the local files\n\n`$ enduro juice pack` - will send localfiles to juicebar, but will preserve any newer files from juicebar\n\n`$ enduro juice pack -f` - will just take local files and put them on juicebox, disregarding any newer file on juicebar',
	$marked_doc_hidden: true,
	marked_doc: '',
	contents: [],
	$contents_hidden: true,
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>In the end, Enduro is a command line tool, and is meant to be used from a terminal.</p>\n<h2 id="popular-commands">Popular commands</h2>\n<p><code>$ enduro</code> - will start enduro in <strong>development</strong> mode</p>\n<p><code>$ enduro start</code> - will start enduro in <strong>production</strong> mode</p>\n<p><code>$ enduro -nr</code> - norefresh tag. Same as just <code>enduro</code> but will not open the browser for the first time</p>\n<p><code>$ enduro addadmin username password</code> - will add admin user to the admin interface.</p>\n<h2 id="running-enduro">Running enduro</h2>\n<p><code>$ enduro -noadmin</code> - will start enduro without admin interface.</p>\n<p><code>$ enduro -nojswatch</code> - development mode without watching for js changes</p>\n<p><code>$ enduro -nocmswatch</code> - development mode without watching cms files</p>\n<h2 id="creating-projects">Creating projects</h2>\n<p><code>$ enduro create projectname</code> - will create new folder <span class="markdown_folder">projectname</span> and put the default scaffolding in there</p>\n<h2 id="securing-project">Securing project</h2>\n<p><code>$ enduro secure passphrase</code> - will create a simple security check for all pages. You know, some clients don&#39;t like the half-built website live.</p>\n<h2 id="building-a-project">Building a project</h2>\n<p><code>$ enduro build</code> - will build sass and requirejs</p>\n<p><code>$ enduro build main-dev</code> - will build requirejs with main-dev.js. This way you can have more configuration files for requirejs</p>\n<h2 id="validating">Validating</h2>\n<p><code>$ enduro check</code> - Runs scss lint and html validator</p>\n<h2 id="adding-cultures">Adding cultures</h2>\n<p><code>$ enduro addculture en</code> - Adds culture to cms files. Check out babel for more info <a href="/docs/babel">Babel</a></p>\n<p><code>$ enduro addculture en de fr</code> - Adds multiple cultures in one call</p>\n<h2 id="juicebox">Juicebox</h2>\n<p><strong>Juicebox</strong> serves as content versioning/migrating/backup tool. <strong>Juicebar</strong> is the remote server where the backup files are stored.</p>\n<p><code>$ enduro juice pull</code> - will download the freshest version of all content files, but will not replace newer local files</p>\n<p><code>$ enduro juice pull -f</code> - will download the freshest version of all content files and will replace the local files</p>\n<p><code>$ enduro juice pack</code> - will send localfiles to juicebar, but will preserve any newer files from juicebar</p>\n<p><code>$ enduro juice pack -f</code> - will just take local files and put them on juicebox, disregarding any newer file on juicebar</p>\n',
		contents: [
			{
				heading: 'Popular commands',
				level: '2',
				link: 'popular-commands'
			},
			{
				heading: 'Running enduro',
				level: '2',
				link: 'running-enduro'
			},
			{
				heading: 'Creating projects',
				level: '2',
				link: 'creating-projects'
			},
			{
				heading: 'Securing project',
				level: '2',
				link: 'securing-project'
			},
			{
				heading: 'Building a project',
				level: '2',
				link: 'building-a-project'
			},
			{
				heading: 'Validating',
				level: '2',
				link: 'validating'
			},
			{
				heading: 'Adding cultures',
				level: '2',
				link: 'adding-cultures'
			},
			{
				heading: 'Juicebox',
				level: '2',
				link: 'juicebox'
			}
		]
	}
}