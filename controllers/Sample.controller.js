'use strict';

var Sample = require('../models/Sample');


exports.getSample = (cb) => {
    var sample = new Sample();

    return cb(sample);
}
