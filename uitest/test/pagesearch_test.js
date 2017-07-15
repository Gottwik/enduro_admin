describe('Searching for a page', function () {
	it('should display result upon typing into search box', function () {
		casper.then(function () {
			casper.sendKeys('.page-search-input', 'gen2')
			expect('.page-search-results .result').to.be.inDOM.and.be.visible
		})
	})

	it('should be able to click on a result', function () {
		casper.then(function () {
			casper.click('.page-search-results .result')
		})
		// casper.then(function () {
		// 	this.capture('uitest/test.png', { top: 0, left: 0, width: 1920, height: 1080 })
		// })
	})
})
