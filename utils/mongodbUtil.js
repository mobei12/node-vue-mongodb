const monk = require('monk');
const db = monk('localhost:27017/learn_db');

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
var insertObject = function (collectionName, data,callback) {
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
module.exports = {
    //查询
    findALL: findALL,
    findOne: findOne,
    findOneByQuery: findOneByQuery,
    findOneAndUpdate: findOneAndUpdate,
    //------
    insertObject: insertObject,
};