const mongodbUtil = require('../utils/mongodbUtil');
mongodbUtil.findOne('59955e23e2263e0de03bac22','user',function(result){
    console.log(JSON.stringify(result));
});