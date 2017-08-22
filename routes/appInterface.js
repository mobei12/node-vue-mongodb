var express = require('express');
var router = express.Router();
const crypto = require('crypto');//加密模块

const mongodbUtil = require('../utils/mongodbUtil');
/* GET users listing. */
router.get('/', function(req, res, next) {
    var query = {};
    console.log(JSON.stringify(req));
  });
module.exports = router;
