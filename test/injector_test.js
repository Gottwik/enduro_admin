var glob = require('glob')

var jsdom = require('jsdom').jsdom

global.document = jsdom('<html><head></head><body></body></html>')
global.window = global.document.parentWindow
global.navigator = window.navigator = {}
global.Node = window.Node

global.window.mocha = {}
global.window.beforeEach = beforeEach
global.window.afterEach = afterEach

require('../assets/vendor/angular/angular')
require('../assets/vendor/angular-mocks/angular-mocks')

global.angular = window.angular
global.inject = global.angular.mock.inject
global.ngModule = global.angular.mock.module

global.Mousetrap = require('../assets/vendor/mousetrap/mousetrap')
require('../assets/vendor/angular-hotkeys/build/hotkeys')
require('../assets/vendor/angular-route/angular-route')
require('../assets/vendor/angular-cookies/angular-cookies')
require('../assets/vendor/angular-vertilize/angular-vertilize')
require('../assets/vendor/fuse.js/src/fuse.min')
require('../assets/vendor/ng-file-upload/ng-file-upload.min.js')

var deps = glob.sync(process.cwd() + '/assets/js/**/*.js')
for (d in deps) {
	// exclude main.js
	if (deps[d].indexOf('main.js') == -1) {
		require(deps[d])
	}
}

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
