var expect = require('chai').expect

describe('Content service', function () {

	beforeEach(function () {
		angular.mock.module('enduro_admin')
	})

	describe('clean function', function () {

		it('should clean an object', inject(['content_service',
			function (content_service) {
				expect(content_service.clean({name: 'martin gottweis'})).to.deep.equal({name: ''})
			}])
		)

		it('should clean an empty object', inject(['content_service',
			function (content_service) {
				expect(content_service.clean({})).to.deep.equal({})
			}])
		)

		it('should clean a deep object', inject(['content_service',
			function (content_service) {
				expect(content_service.clean({name: 'martin gottweis', awards: {wwwaward: 'has it'}})).to.deep.equal({name: '', awards: {wwwaward: ''}})
			}])
		)

		it('should keep the termination values', inject(['content_service',
			function (content_service) {
				expect(content_service.clean({name: 'martin gottweis', $name_hidden: 'this should be kept'})).to.deep.equal({name: '', $name_hidden: 'this should be kept'})
			}])
		)

	})
})
