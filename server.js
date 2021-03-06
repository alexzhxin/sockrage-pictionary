/**
 * GLOBAL VARS
 * @type {exports}
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = module.exports.app = express();
var server = require('http').Server(app);
var config = require('./config');

/**
 * App settings
 */
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Rendering Index
 */
app.route('/').get(function(req, res) {

    res.render('index', {
        sockrage_addr : config.configObject.sockrage_addr,
        db_name_webchat : config.configObject.db_name_webchat,
        db_name_pictionary : config.configObject.db_name_pictionary
    });

});

/**
 * LISTEN SERVER
 */
server.listen(config.configObject.server_port, function() {
    console.log("Express server started on port " + config.configObject.server_port);
});