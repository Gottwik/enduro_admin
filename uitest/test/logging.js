before(function () {
	casper.start('http://localhost:5000/admin')

	casper.on('remote.message', function (message) {
		this.echo(message)
	})

	casper.on('page.error', function (msg, trace) {
		this.echo('Error: ' + msg)
	})

	casper.on('resource.error', function (msg, trace) {
		this.echo('Res.Error: ' + JSON.stringify(msg))
	})
})
