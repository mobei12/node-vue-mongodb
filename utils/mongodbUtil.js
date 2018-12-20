const monk = require('monk');
const db = monk('localhost:27017/sl_db');
/*
查询数据 start
*/
/*  查询全部
    collectionName：表名
    callback：返回值
 */
var findALL = function (collectionName, callback) {
    var collection = db.get(collectionName);
    collection.find({}, function (err, cursor) {
        if (err) {
            console.log(err);
        }
        db.close();
        callback(cursor);
    })
};
/*  id查询
    collectionName：表名
    callback：返回值
 */
var findOne = function (id, collectionName, callback) {
    var collection = db.get(collectionName);
    collection.find({ _id: id }, function (err, cursor) {
        if (err) {
            console.log(err);
        }
        db.close();
        callback(cursor[0]);
    });
};
/*  query查询
    collectionName：表名
    keys:要查询的数据，不传查全部
    callback：返回值
 */
var findOneByQuery = function (query, collectionName, keys, callback) {
    var collection = db.get(collectionName);
    if (keys.length === 0) {
        keys = [];
    }
    collection.findOne(query, keys, function (err, cursor) {
        if (err) {
            console.log(err);
        }
        db.close();
        callback(cursor);
    });
};
/*  id查询并修改
    data:修改的数据对象
    collectionName：表名
    callback：返回值
 */
var findOneAndUpdate = function (id, collectionName, data, callback) {
    var collection = db.get(collectionName);
    collection.findOneAndUpdate({ _id: id }, data, function (err, cursor) {
        if (err) {
            console.log(err);
        }
        db.close();
        callback(cursor[0]);
    });
};
/*
查询数据 end
*/
/*
新增数据 start
*/
/*  插入单条或者多条数据，单条数据传入对象，多条传入数组
    data:新增的对象
    collectionName：表名
    callback：返回值
 */
var insertObject = function (collectionName, data, callback) {
    var collection = db.get(collectionName);
    collection.insert(data, function (err, cursor) {
        if (err) {
            console.log(err);
        }
        db.close();
        callback(cursor);
    });
}
/*
新增数据 end
*/
/*
删除 start
*/
/**
 * 根据条件删除
 * collectionName：表名
 * query:条件
 */
var deleteByQuery = function (collectionName, query, callback) {
    var collection = db.get(collectionName);
    collection.remove(query, function (err, cursor) {
        if (err) {
            console.log(err);
        }
        db.close();
        callback(cursor);
    })
}
/*
删除 end
*/
/*
修改 start
*/
/**
 * 条件修改
 * clollectionName:表名
 * query:条件
 * data,数据
 * 
 */
var updated = function (collectionName, query, data, callback) {
    var collection = db.get(collectionName);
    collection.update(query,{$set:data},function(err,cursor){
        if(err){
            console.log(err);
        }
        db.close();
        callback(cursor);
    })
}
/*
修改 end
*/
module.exports = {
    //查询
    findALL: findALL,
    findOne: findOne,
    findOneByQuery: findOneByQuery,
    findOneAndUpdate: findOneAndUpdate,
    //新增
    insertObject: insertObject,
    //删除
    deleteByQuery: deleteByQuery,
    //修改
    updated:updated
};