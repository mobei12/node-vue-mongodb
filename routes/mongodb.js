const mongodbUtil = require('../utils/mongodbUtil');
mongodbUtil.updated('user',{name:'张三22'},{'name1':'张22dq'},function(result){
    console.log(result);
});