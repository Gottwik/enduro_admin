describe('Adding page', function () {
	it('should be able to add a new page', function () {
		casper.waitForSelector('.menufolder[data-cmsfolder="testgenerator"] ~.inner-folder .addpage-button', function () {
			casper.click('.menufolder[data-cmsfolder="testgenerator"] ~.inner-folder .addpage-button')
		})
		casper.waitForSelector('[ng-model="new_pagename"]', function () {
			casper.sendKeys('[ng-model="new_pagename"]', 'gen3')
			casper.click('.modal-body .add-page-button')
		})
		casper.waitForSelector('.menupage[data-cmspage="gen3"]', function () {
			expect('.menupage[data-cmspage="gen3"]').to.be.inDOM.and.be.visible
		})
	})
})
