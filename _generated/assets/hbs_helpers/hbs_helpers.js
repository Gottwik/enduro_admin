define([],function() { return function(enduro.templating_engine) { 

// * ———————————————————————————————————————————————————————— * //
// *    Add helper
// *	Adds two numbers together
// *
// *	Usage:
// *		{{add @index 2}} // outputs @index + 2
// *
// *	also takes more arguments
// *		{{add 1 2 3}} outputs 6
// *
// *
// * ———————————————————————————————————————————————————————— * //

const helper = function () {}

helper.prototype.register = function () {
	enduro.templating_engine.registerHelper('add', function () {

		if (arguments.length <= 1) {
			return ''
		}

		return Array.prototype.slice.call(arguments).slice(0, -1).reduce(function (prev, next) {
			return prev + next
		})
	})
}

module.exports = new helper()

// * ———————————————————————————————————————————————————————— * //
// *    class helper
// *	render variable name if variable is true
// *	Usage:
// *
// *		{{class 'gradient'}} // will render 'gradient' if class context.gradient is truthy
// *
// *	also takes multiple arguments
// *
// *		{{class 'gradient' 'dark' 'border'}}
// *
// *	Note: converts underscores to dashes
// *
// *		{{class 'gradient_bottom'}} // will render gradient-bottom
// *
// * ———————————————————————————————————————————————————————— * //
const helper = function () {}

helper.prototype.register = function () {
	enduro.templating_engine.registerHelper('class', function () {
		const context = this

		// if no argument is provided renders empty string
		if (arguments.length <= 1) {
			return ''
		}

		return Array.prototype.slice.call(arguments).slice(0, -1) // takes all arguments without the handlebars context
			.reduce(function (prev, next) {
				return context[next]
					? prev + ' ' + next // adds argument name if the value is truthy
					: prev + ''
			}, '')
			.replace(/_/g, '-') // converts underscores to dashes
			.substring(1) // removes first space

	})
}

module.exports = new helper()

// * ———————————————————————————————————————————————————————— * //
// *    Compare helper
// *	Simple ternary-style helper that will choose between two ouputs based on if the variables provided are equal
// *	Usage:
// *
// *	{{Compare age 20 'this dude is exactly 20 years old' 'he's not 20 years old}}
// *
// * ———————————————————————————————————————————————————————— * //
const helper = function () {}

helper.prototype.register = function () {

	enduro.templating_engine.registerHelper('compare', function (variable1, variable2, value_if_true, value_if_false) {
		return variable1 == variable2
			? value_if_true
			: value_if_false
	})

}

module.exports = new helper()

// * ———————————————————————————————————————————————————————— * //
// *    Default helper
// *	Let's you specify the default value in case the primary value is null
// *	Usage:
// *
// *	{{Default age 20}} <<< if no age is provided 20 will be used
// *
// * ———————————————————————————————————————————————————————— * //

const helper = function () {}

helper.prototype.register = function () {

	enduro.templating_engine.registerHelper('default', function (name, defaultValue, options) {

		if (typeof options === 'undefined') {
			defaultValue = ''
		}

		return typeof name !== 'undefined'
			? name
			: defaultValue
	})

}

module.exports = new helper()

// * ———————————————————————————————————————————————————————— * //
// *    divisible helper
// *	Simple ternary-style helper that will choose between two ouputs based on if the variables provided is divisible by next argument
// *	Usage:
// *
// *	{{divisible @index 2 'even' 'odd'}} // outputs even if @index % 2 == 0
// *
// * ———————————————————————————————————————————————————————— * //
const helper = function () {}

helper.prototype.register = function () {

	enduro.templating_engine.registerHelper('divisible', function (number_to_dividee, divided_by, value_if_true, value_if_false) {

		// if no false is provided
		if (typeof value_if_false === 'object') {
			value_if_false = ''
		}

		return number_to_dividee % divided_by == 0
			? value_if_true
			: value_if_false
	})
}

module.exports = new helper()

// * ———————————————————————————————————————————————————————— * //
// *    Files helper
// *	Find all files in path and provide them as each
// *	Usage:
// *
// *	{{#files '/assets/images/'}}
// *		<p>Image: {{this}}</p>
// *	{{/files}}
// * ———————————————————————————————————————————————————————— * //
const helper = function () {}

// vendor dependency
const glob = require('glob')
const path = require('path')

helper.prototype.register = function () {

	enduro.templating_engine.registerHelper('files', function (path_to_folder, handlebars_context) {

		// add path to enduro project to make sure we won't be matching something else in the files' path
		path_to_folder = path.join(enduro.project_path, path_to_folder)

		const path_to_all_files_in_folder = path.join(path_to_folder, '**', '*.*')

		// get all files with path
		const files = glob.sync(path_to_all_files_in_folder)

		// get multiple properties from a absolute path
		const processed_output_html = files.map((file) => {

			// stores relative path to folder
			const relative_path = file.replace(new RegExp('.*' + path_to_folder), '')

			// returns object
			return {
				absolute_path: file,
				relative_path: relative_path,
				file_name: path.basename(relative_path),
				file_name_no_extension: path.basename(relative_path, path.extname(relative_path)),
				depth: relative_path.match(new RegExp('/', 'g')).length - 1
			}

		// builds processed html
		}).reduce((prev, next) => {
			return prev + handlebars_context.fn(next)
		}, '')

		return processed_output_html
	})
}

module.exports = new helper()

// * ———————————————————————————————————————————————————————— * //
// *    filter helper
// *	filters context by applying lodash's isMatch
// *	usage:
// *
// *	{{#filter '{"depth": 0}'}}
// *		<p>Image: {{this}}</p>
// *	{{/filter}}
// * ———————————————————————————————————————————————————————— * //
const helper = function () {}

// vendor dependency
const _ = require('lodash')

helper.prototype.register = function () {

	enduro.templating_engine.registerHelper('filter', function (filter_string, handlebars_context) {

		// parses filter_string into object and if current context passes isMatch renders the template
		if (_.isMatch(this, JSON.parse(filter_string))) {
			return handlebars_context.fn(this)
		}

	})
}

module.exports = new helper()

// * ———————————————————————————————————————————————————————— * //
// *    First helper
// *	Gets the first element of an array or object
// *
// *	Usage:
// *		{{#first people}}
// *			<p>First person's age is: {{age}}</p>
// *		{{/first}}
// * ———————————————————————————————————————————————————————— * //
const helper = function () {}

helper.prototype.register = function () {

	enduro.templating_engine.registerHelper('first', function (array, options) {
		return options.fn(array[Object.keys(array)[0]])
	})
}

module.exports = new helper()

// * ———————————————————————————————————————————————————————— * //
// *    Grouped each helper
// *    Will split array into chunks of specified size
// *    taken from https://funkjedi.com/technology/412-every-nth-item-in-handlebars/
// * ———————————————————————————————————————————————————————— * //
const helper = function () {}

helper.prototype.register = function () {

	enduro.templating_engine.registerHelper('grouped_each', function (every, context, options) {

		if (!context || !(Object.keys(context).length || context.length)) {
			return ''
		}

		let out = ''
		let subcontext = []
		let i = 0

		for (let key in context) {
			if (i > 0 && i % every === 0) {
				out += options.fn(subcontext)
				subcontext = []
			}
			subcontext.push(context[key])
			i++
		}
		out += options.fn(subcontext)

		// Outputs processed html
		return out
	})
}

module.exports = new helper()

// * ———————————————————————————————————————————————————————— * //
// *    htmlescape helper
// *	Usage:
// *		{{htmlescape 'www.example.com?p=escape spaces here'}}
// *
// * ———————————————————————————————————————————————————————— * //
const helper = function () {}

helper.prototype.register = function () {

	enduro.templating_engine.registerHelper('uriencode', function (url) {
		return encodeURI(url)
	})
}

module.exports = new helper()

// * ———————————————————————————————————————————————————————— * //
// *    List helper
// *	Provides #each functionality with a inline list
// *	Usage:
// *
// *	{{#list 'small' 'medium' 'large'}}
// *		<p class="{{this}}">test text</p>
// *	{{/list}}
// *
// * ———————————————————————————————————————————————————————— * //
const helper = function () {}

helper.prototype.register = function () {

	enduro.templating_engine.registerHelper('list', function () {

		// block is the last argument
		const block = arguments[arguments.length - 1]

		let accum = ''
		for (let i = 0; i < arguments.length - 1; i++) {
			accum += block.fn(arguments[i])
		}

		// returns the built string
		return accum
	})
}

module.exports = new helper()

// * ———————————————————————————————————————————————————————— * //
// *    Lorem helper
// *	Generates dummy text with a specified length in words
// *	Usage:
// *
// *	{{lorem 20}}
// *
// *	If two arguments are provided random number of words from this range will be generated
// *
// *	{{lorem 10 20}}
// *
// * ———————————————————————————————————————————————————————— * //

const helper = function () {}

helper.prototype.register = function () {

	enduro.templating_engine.registerHelper('lorem', function (length, upperrange) {

		// set length to 10 if no length is provided
		if (typeof length !== 'number') {
			length = 10
		}

		// set upperrange to length if no upperrange is provided
		upperrange = typeof upperrange === 'number'
			? upperrange
			: length

		// generate random length
		length = Math.round(Math.random() * (upperrange - length) + length)

		// Calvin and Hobbes is the best!
		let dummy = 'Calvin and Hobbes is a daily comic strip by American cartoonist Bill Watterson that was syndicated from November 18 1985 to December 31 1995 Commonly cited as the last great newspaper comic Calvin and Hobbes has evinced broad and enduring popularity influence and academic interest Calvin and Hobbes follows the humorous antics of Calvin a precocious mischievous and adventurous six-year-old boy and Hobbes his sardonic stuffed tiger The pair is named after John Calvin 16th-century French Reformation theologian and Thomas Hobbes a 17th-century English political philosopher Set in the contemporary suburban United States the strip depicts Calvin\'s frequent flights of fancy and his friendship with Hobbes It also examines Calvin\'s relationships with family and classmates especially the love hate relationship between him and his classmate Susie Derkins Hobbes dual nature is a defining motif for the strip to Calvin Hobbes is a live anthropomorphic tiger all the other characters see Hobbes as an inanimate stuffed toy Though the series does not mention specific political figures or current events it does explore broad issues like environmentalism public education philosophical quandaries and the flaws of opinion polls At the height of its popularity Calvin and Hobbes was featured in over 2,400 newspapers worldwide In 2010 reruns of the strip appeared in more than 50 countries and nearly 45 million copies of the Calvin and Hobbes books had been sold'

		// Randomize string
		dummy = dummy
			.split(' ')
			.sort(function () {
				return .5 - Math.random()
			})
			.slice(0, length)
			.join(' ')

		// make first letter capital and add period at the end
		dummy = dummy[0].toUpperCase() + dummy.substring(1) + '.'

		return dummy
	})
}

module.exports = new helper()

// * ———————————————————————————————————————————————————————— * //
// *    multiply helper
// *	works with any number of arguments
// *	Usage:
// *
// *	{{multiply @index 2}}
// *	{{multiply 2 2 2}}
// *
// * ———————————————————————————————————————————————————————— * //
const helper = function () {}

helper.prototype.register = function () {

	enduro.templating_engine.registerHelper('multiply', function () {

		if (arguments.length <= 1) {
			return ''
		}

		return Array.prototype.slice.call(arguments).slice(0, -1).reduce(function (prev, next) {
			return prev * next
		})
	})
}

module.exports = new helper()

// * ———————————————————————————————————————————————————————— * //
// *    Partial helper
// *	Loads a partial dynamically by name. This allows to define the structure of a page in a cms file.
// *	Usage:
// *
// *	{{partial 'partial name'}}
// *
// * ———————————————————————————————————————————————————————— * //
const helper = function () {}

helper.prototype.register = function () {

	enduro.templating_engine.registerHelper('partial', function (name, context, options) {

		if (!options) {
			options = context
			context = this
		}

		// Get the partial with the given name. This is a string.
		const partial = enduro.templating_engine.partials[name]

		// Return empty string if the partial is not defined
		if (!partial) return ''

		// build up context
		context.global = options.data.root.global

		// Compile and call the partial with context
		return (typeof partial == 'function')
			? new enduro.templating_engine.SafeString(partial(context))
			: new enduro.templating_engine.SafeString(enduro.templating_engine.compile(partial)(context))

	})
}

module.exports = new helper()

// * ———————————————————————————————————————————————————————— * //
// *    slug helper
// *	Usage:
// *
// *	{{slug 'This Link'}}
// *
// *	will return this-link
// * ———————————————————————————————————————————————————————— * //

const helper = function () {}

helper.prototype.register = function () {

	const format_service = require(enduro.enduro_path + '/libs/services/format_service')

	enduro.templating_engine.registerHelper('slug', function (text) {

		if (!text) {
			return ''
		}

		return format_service.slug(text)
	})
}

module.exports = new helper()

// * ———————————————————————————————————————————————————————— * //
// *    switch helper
// *	provides switch functionality with inline arguments
// *	usage:
// *
// *	{{switch small '5px' medium '10px' large '20px'}}
// *
// *	returns last value as default
// *
// * ———————————————————————————————————————————————————————— * //
const helper = function () {}

helper.prototype.register = function () {

	enduro.templating_engine.registerHelper('switch', function () {

		// create a list out of arguments
		let arguments_list = []
		for (let i in arguments) {
			arguments_list.push(arguments[i])
		}

		// remove last element - which is the whole context
		arguments_list = arguments_list.slice(0, -1)

		// check even argumens and return respective odd argument
		for (i = 0; i < Math.floor(arguments_list.length / 2); i++) {
			if (arguments_list[i * 2]) {
				return arguments_list[i * 2 + 1]
			}
		}

		// return last provided argument as a default value
		return arguments_list.slice(-1)[0]
	})
}

module.exports = new helper()

// * ———————————————————————————————————————————————————————— * //
// *    Ternary helper
// *	Simple if helper with two possible outputs
// *	Usage:
// *
// *	{{ternary this 'was true' 'was false'}}
// *
// * ———————————————————————————————————————————————————————— * //
const helper = function () {}

helper.prototype.register = function () {

	enduro.templating_engine.registerHelper('ternary', function (condition, value_if_true, value_if_false) {

		// if no false is provided
		if (typeof value_if_false === 'object') {
			value_if_false = ''
		}

		return condition
			? value_if_true
			: value_if_false
	})
}

module.exports = new helper()

// * ———————————————————————————————————————————————————————— * //
// *    Times helper
// *	Duplicates specified inner block specified times
// *	Usage:
// *
// *	{{#time 10}}
// *		<p>This is repeated 10 times</p>
// *	{{/times}}
// *
// * ———————————————————————————————————————————————————————— * //
const helper = function () {}

helper.prototype.register = function () {

	enduro.templating_engine.registerHelper('times', function (iterations, upperrange, block) {

		// will store the final accumulated html
		let accum = ''

		// if upperrange is not provided
		if (typeof upperrange !== 'number') {
			block = upperrange
		} else {
			// if upperrange is provided, picks randomly from range
			iterations = Math.round(Math.random() * (upperrange - iterations) + iterations)
		}

		for (let i = 0; i < iterations; ++i) {

			// Sets is_first variable to context
			i == 0
				? this.is_first = true
				: this.is_first = false

			// Sets index to context
			this.times_index = i

			// Renders block context and adds it to the accumulated context
			accum += block.fn(this)
		}

		// return accumulated html
		return accum
	})
}

module.exports = new helper()

// * ———————————————————————————————————————————————————————— * //
// * 	Within helper
// *	Changes context of the block inside for array's descendant
// *	with provided key
// *	Usage:
// *
// *	{{#within people mike}}
// *		<p>Mike's age is: {{age}}</p>
// *	{{/within}}
// *
// * ———————————————————————————————————————————————————————— * //

const helper = function () {}

helper.prototype.register = function () {

	enduro.templating_engine.registerHelper('within', function (array, key, options) {
		return options.fn(array[key])
	})
}

module.exports = new helper()


 }})