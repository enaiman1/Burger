// dependenice (connecting to connections.js);
var connection = require("./connection")

function printQuestionMark(num) {
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if(typeof value === "string" && value.indexOf("") >=0) {
                value ="" + value + "";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";

        connection.query(queryString, function(err, result){
            if(err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(table, cols, val, cb) {
        var queryString = "INSERT INTO " + table;
        queryString +=" ( ";
        queryString += cols.toString();
        queryString +=" ) ";
        queryString += " VALUES (";
        queryString += printQuestionMark(val.length);
        queryString += " ) ";

        // var queryString = `INSERT INTO ${table} (${cols.toString}) VALUES (${printQuestionMark(val.length)})`

        console.log(queryString);

        console.log(val);
        connection.query(queryString, val, function(err, result){
            if(err) {
                throw err
            }
            cb(result);
        });
    },

    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, results){
            if (err) {
                throw err 
            }
            cb(results);
        });
    },

    deleteOne: function(table, condition, cb) {
        var queryString = " DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
        
        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err
            }
            cb(result);
        });
    }
};


//allows other pages to use this orm

module.exports = orm;