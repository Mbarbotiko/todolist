
var orm = require("../config/orm.js");

var aToDo = {
  all: function(cb) {
    orm.all("to_do", function(res) {
      cb(res);

    });
  },

  create: function(cols, vals, cb) {
    orm.create("to_do", cols, vals, function(res) {
      cb(res);

    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("to_do", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("to_do", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = aToDo;
