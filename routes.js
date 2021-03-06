/**
 * Main application routes
 */

'use strict';

module.exports = function(app) {

    // Enable CORS for Web API
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.header("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
        next();
    });

    // Insert Web API routes below - maintain in separate file for maintainability
    app.use('/api', require('./api/index'));


    // Insert app routes below
    app.route('/')
        .get(function(req, res) {
            var SampleController = require('./controllers/Sample.controller');
            SampleController.getSample(function(sample) {

                res.render('index', {
                    title: 'Hello, world!',
                    subtitle: 'Welcome to Express',
                    sample: JSON.stringify(sample)
                });
            });
        });

    // All undefined asset or api routes should return a 404
    app.route('/*')
        .get(function(req, res) {
            return res.sendStatus(404);
        });
};
