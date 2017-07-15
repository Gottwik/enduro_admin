
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
		casper.waitUntilVisible('.page-viewport', function () {
			expect('.page-viewport').to.be.inDOM.and.be.visible
			expect('.publish-button').to.be.inDOM.and.be.visible
			this.capture('uitest/tmp_test.png', { top: 0, left: 0, width: 1920, height: 1080 })
		})
	})

	it('should be able to click on a folder and subpages appear', function () {
		casper.waitUntilVisible('.menufolder[data-cmsfolder="testgenerator"]', function () {
			casper.click('.menufolder[data-cmsfolder="testgenerator"]')
		})
		casper.then(function () {
			expect('.menupage[data-cmspage="gen1"]').to.be.inDOM.and.be.visible
			expect('.menupage[data-cmspage="gen2"]').to.be.inDOM.and.be.visible
		})
	})
})