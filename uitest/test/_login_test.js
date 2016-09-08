describe('Login form', function () {

	it('login form should have a form in it', function () {
		casper.then(function () {
			expect(true).to.be.ok
			expect('form').to.be.inDOM.and.be.visible
		})
	})

	it('should be able to login user', function () {
		casper.then(function () {
			casper.sendKeys('.enduro_username', 'gottwik')
			casper.sendKeys('.enduro_password', '123')
			casper.click('button')
		})
		casper.waitWhileSelector('.page-viewport', function () {
			expect('.page-viewport').to.be.inDOM.and.be.visible
			expect('.publish-button').to.be.inDOM.and.be.visible
		})
	})

	it('should be able to click on a folder and subpages appear', function () {
		casper.then(function () {
			casper.click('.menufolder[data-cmsfolder="testgenerator"]')
		})
		casper.then(function () {
			expect('.menupage[data-cmspage="gen1"]').to.be.inDOM.and.be.visible
			expect('.menupage[data-cmspage="gen2"]').to.be.inDOM.and.be.visible
		})
	})
})
