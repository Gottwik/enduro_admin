var enduro = require('enduro')
console.log('Running ui tests')

enduro.silent()
enduro.run(['start'])
	.then(() => {
		run_mocha_casper()
	})

function run_mocha_casper () {
	const spawn = require('child_process').spawn
	const mocha_casper = spawn(__dirname + '/../node_modules/mocha-casperjs/bin/mocha-casperjs', ['uitest/test/*', '--viewport-width=1500'])

	mocha_casper.stdout.on('data', function (data) {
		console.log(data.toString())
	})

	mocha_casper.on('close', function (data) {
		console.log('ui tests finished')
		process.exit()
	})
}
