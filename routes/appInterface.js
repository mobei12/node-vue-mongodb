var express = require('express');
var router = express.Router();
const crypto = require('crypto');//加密模块
const mongodbUtil = require('../utils/mongodbUtil');

/* GET users listing. */
router.get('/', function(req, res, next) {
    const mobile = req.query.mobile;
    const psw = req.query.psw;
    const hash = crypto.createHash('md5');
    hash.update(psw);
    var pwdMd5 = hash.digest('hex');
    const query = {phone:mobile};
    mongodbUtil.findOneByQuery(query,'user',[],function(result){
      const resultData = {};
      if(pwdMd5 !== result.pwd){
        resultData.isSuccess = false;
        resultData.Msg = "密码错误";
        res.send(resultData);
      }else{
        result.isSuccess = true;
        res.send(result);
      }
    })
    
  });
module.exports = router;
