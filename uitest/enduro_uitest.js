var enduro = require('enduro')
console.log('Running ui tests')

enduro.run(['start'])
	.then(() => {
		run_mocha_casper()
	})

function run_mocha_casper () {
	const spawn = require('child_process').spawn
	const mocha_casper = spawn(__dirname + '/../node_modules/mocha-casperjs/bin/mocha-casperjs', ['uitest/test/*', '--viewport-width=1000'])

	mocha_casper.stdout.on('data', function (data) {
		console.log(data.toString())
	})

	mocha_casper.on('close', function (data) {
		console.log('ui tests finished')
		process.exit()
	})

	mocha_casper.stdout.on("remote.message", function(msg) {
	    console.log("Console: " + msg);
	})

	mocha_casper.stdout.on("page.error", function(msg, trace) {
	    console.log("Error: " + msg);
	})

	mocha_casper.stdout.on("resource.error", function(msg, trace) {
	    console.log("Res.Error: " + msg);
	})
}
