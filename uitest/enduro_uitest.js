// vendor dependencies
var enduro = require('enduro')
var rimraf = require('rimraf')
var path = require('path')

// local dependencies

enduro.silent()

var admin_test_project_path = 'uitest_testproject'

rimraf(path.join(process.cwd(), admin_test_project_path), function () {
	enduro.run(['create', admin_test_project_path, 'test'])
		.then(() => {
			global.CMD_FOLDER = path.join(process.cwd(), admin_test_project_path)
			enduro.run(['start'])
				.then(() => {
					run_mocha_casper()
				})
		})
})

function run_mocha_casper () {

	// stores path to the casper mocha executable
	var mocha_casper_path = path.join(__dirname, '..', 'node_modules', 'mocha-casperjs', 'bin', 'mocha-casperjs')

	// starts the mocha-casperjs
	const spawn = require('child_process').spawn
	const mocha_casper = spawn(mocha_casper_path, ['uitest/test/*', '--viewport-width=1900 --viewport-height=1080 --bail'])
	// const mocha_casper = spawn(__dirname + '/../node_modules/mocha-casperjs/bin/mocha-casperjs', ['uitest/test/*', '--viewport-width=1500'])

	// listens to data - console.log from the casper
	mocha_casper.stdout.on('data', function (data) {
		process.stdout.write(data.toString())
	})

	// listens to casper's exit
	mocha_casper.on('close', function (data) {
		rimraf(path.join(process.cwd(), admin_test_project_path), function () {
			process.exit()
		})
	})
}
