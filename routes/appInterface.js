var express = require('express');
var router = express.Router();
const mongodbUtil = require('../utils/mongodbUtil');
/* GET users listing. */
router.get('/', function(req, res, next) {
    var query = {'name':{$regex:/2/i}}
    mongodbUtil.findOneByQuery(query,'user',[],function(result){
        res.send(result);
    });
  });
module.exports = router;
