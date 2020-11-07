var connection = require("../config/connection");

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },


    insertOne: function (table, columns, values, cb) {
         var queryString = "INSERT INTO ?? (??) VALUES (?);"
        connection.query(queryString, [table, columns, values], function(err, result){
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function (table, columns, value, cb) {
        var queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString, [table, columns, value], function (err, result) {
            if (err) throw err;
            cb(result);

        });
    },
};

module.exports = orm;