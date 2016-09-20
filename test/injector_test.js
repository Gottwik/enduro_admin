var expect = require('chai').expect

describe('Angularjs services', function () {

	beforeEach(function () {
		angular.mock.module('enduro_admin')
	})

	describe('format-service', function () {
		it('should slug', inject(['format_service',
			function (format_service) {
				expect(format_service.slug('Best article ?ever')).to.equal('best-article-ever')
				expect(format_service.slug('What')).to.equal('what')
				expect(format_service.slug('')).to.equal('')
				expect(format_service.slug('..,;two       words')).to.equal('two-words')
			}])
		)

		it('should deslug', inject(['format_service',
			function (format_service) {
				expect(format_service.deslug('What-up-people')).to.equal('What up people')
			}])
		)

		it('should deglobalize', inject(['format_service',
			function (format_service) {
				expect(format_service.deglobalize('@@toys.lego')).to.equal('Lego')
			}])
		)

	})

})
