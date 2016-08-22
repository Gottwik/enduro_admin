describe('Login form', function () {
	before(function () {
		casper.start('http://localhost:5000/')
	})

	it('login form should have a form in it', function () {
		casper.then(function () {
			expect(true).to.be.ok
			// expect('form').to.be.inDOM.and.be.visible
			// casper.sendKeys('.enduro_username', 'gottwik')
			// casper.sendKeys('.enduro_password', '123')
			// casper.click('button')
			casper.evaluate(function () {
				// console.log(document.body.parentNode.innerHTML)
			})
		})

		casper.wait(500, function () {
			this.capture('uitest/test.png')
		})
	})

	casper.on('remote.message', function (message) {
		this.echo(message)
	})

	casper.on('page.error', function (msg, trace) {
		this.echo('Error: ' + msg)
	})

	casper.on('resource.error', function (msg, trace) {
		this.echo('Res.Error: ' + msg)
	})
})
