var local_app = function () {}

local_app.prototype.init = function(app){
	// Handle for executing enduro refresh from client
	app.get('/crazy', function (req, res) {
		res.send('crazy')
	})
}

module.exports = new local_app()