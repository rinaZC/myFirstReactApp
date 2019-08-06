const express = require("express");
const router = express.Router();
const TodoItem = require("../models/TodoItems");

router.post("/add", (req, res) => {
  const testTodo = new TodoItem({
    taskText: req.body.task
  });

  testTodo
    .save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    });
});

router.get("/all", (req, res) => {
  //console.log("got");
  TodoItem.find().exec(function(err, data) {
    if (!err) {
      //console.log(data);
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

router.post("/remove", (req, res) => {
  TodoItem.deleteOne({ _id: req.body.index }, { useFindAndModify: false }).exec(
    function(err) {
      if (!err) {
        //console.log(req.body.index);
        //res.redirect("/db/all");
        TodoItem.find().exec(function(err, data) {
          if (!err) {
            //console.log(data);
            res.send(data);
          } else {
            console.log(err);
          }
        });
      } else {
        console.log(err);
      }
    }
  );
});

router.post("/toggle", (req, res) => {
  //console.log(req.body);
  TodoItem.findOneAndUpdate(
    { _id: req.body.index },
    { completed: !req.body.completed },
    { useFindAndModify: false }
  ).exec(function(err) {
    if (!err) {
      TodoItem.find().exec(function(err, data) {
        if (!err) {
          //console.log(data);
          res.send(data);
        } else {
          console.log(err);
        }
      });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
