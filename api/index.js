var express = require('express');
var router = express.Router();
var Sample = require('../models/Sample');

/**
 * @api {get} /api/v1/sample Sample get data
 * @apiVersion 1.0.0
 * @apiName index
 * @apiGroup Sample
 * @apiPermission admin
 *
 * @apiDescription Documentation for a sample json get request
 *
 *
 */
router.get('/v1/sample', function(req, res) {
    var sample = new Sample();

    return res.status(200).json(sample);
})

module.exports = router;
