var connection = require("../config/connection");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}


function objToSql(ob) {
    var arr = [];
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();

}





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

        console.log(queryString);
        connection.query(queryString, [table, columns, value], function (err, result) {
            if (err) throw err;
            cb(result);

        });
    },
            
    
};

module.exports = orm;