var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    return res.status(200).json({})
})

module.exports = router;
