describe('Login form', function () {
	before(function () {
		casper.start('http://localhost:5000/')
	})

	it('login form should have a form in it', function () {
		casper.then(function () {

			expect(true).to.be.ok
			expect('form').to.be.inDOM.and.be.visible
		})
	})
})
