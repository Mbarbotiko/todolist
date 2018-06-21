var express = require("express");

var router = express.Router();

var aToDo = require("../models/todomodel.js");

router.get("/", function(req, res) {
  aToDo.all(function(data) {
    var hbsObject = {
      to_do: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/todolist", function(req, res) {
  aToDo.create([
    "todo_item", "completed"
  ], [
    req.body.todo_item, req.body.completed
  ], function(result) {

    res.json({ id: result.insertId });
  });
});

router.put("/api/todolist/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  aToDo.update({
    completed: req.body.completed
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/todolist/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  aToDo.delete(condition, function(result) {
    if (result.affectedRows == 0) {

      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
