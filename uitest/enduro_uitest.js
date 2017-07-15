// vendor dependencies
const rimraf = require('rimraf')
const path = require('path')

const admin_test_project_path = 'uitest_testproject'

require('enduro').init()
	.then(() => {
		enduro.actions.silent()
		start_ui_tests()
	})

function start_ui_tests () {
	// delete the folder with the test project, just in case it exists
	rimraf(path.join(process.cwd(), admin_test_project_path), function () {

		// create new test project
		enduro.actions.create(admin_test_project_path, 'test')
			.then(() => {
				
				// cd into the new test project
				enduro.project_path = path.join(process.cwd(), admin_test_project_path)
				
				// start enduro
				enduro.actions.start()
					.then(() => {
						run_mocha_casper()
					})
			})
	})
}

function run_mocha_casper () {

	// stores path to the casper mocha executable
	var mocha_casper_path = path.join(__dirname, '..', 'node_modules', 'mocha-casperjs', 'bin', 'mocha-casperjs')

	// starts the mocha-casperjs
	const spawn = require('child_process').spawn
	const mocha_casper = spawn(mocha_casper_path, ['uitest/test/*', '--viewport-width=1900 --viewport-height=1080 --bail'])

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
