var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  
  create: function(name, cb) {
    orm.insertOne("burgers", [burger_name, devoured], [name, false], function(res) {
      cb(res);
    });
  },
  update: function(condition, id, cb) {
    orm.updateOne("burgers", condition, id, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;