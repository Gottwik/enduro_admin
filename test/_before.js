var glob = require('glob')

var jsdom = require('jsdom').JSDOM

global.window = new jsdom('<html><head></head><body></body></html>').window
global.document = window.document
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
global._ = window._
global.$ = window.$

global.Mousetrap = require('../assets/vendor/mousetrap/mousetrap')
require('../assets/vendor/angular-hotkeys/build/hotkeys')
require('../assets/vendor/angular-route/angular-route')
require('../assets/vendor/angular-cookies/angular-cookies')
require('../assets/vendor/fuse.js/src/fuse.min')
require('../assets/vendor/ng-file-upload/ng-file-upload.min.js')

var deps = glob.sync(process.cwd() + '/assets/js/**/*.js')
for (d in deps) {
	// exclude main.js
	if (deps[d].indexOf('main.js') == -1) {
		require(deps[d])
	}
}
