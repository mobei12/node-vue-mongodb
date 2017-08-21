const mongodbUtil = require('../utils/mongodbUtil');
mongodbUtil.findOneAndUpdate('599a4c8fd17b3e1100daa6f4','user',{subject:[{math:'40',English:'40'}]},function(result){
    console.log(result);
});