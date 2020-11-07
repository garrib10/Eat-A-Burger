var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  
  insertOne: function(cols,vals, cb) {
    orm.insertOne("burgers", cols,vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(cols,vals, cb) {
    orm.updateOne("burgers", cols,vals,function(res) {
      cb(res);
    });
  },

 deleteOne:function (cols,vals, cb){
   orm.deleteOne("burgers", cols,vals, function(res){
     cb(res);
   });
  }
};
 

module.exports = burger;