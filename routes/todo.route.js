const express = require("express");
const router = express.Router();
const Todo = require("../models/todo.model");

router.get("/", async (req, res) => {
  // Todo.find(function (err, todos) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.json(todos);
  //   }
  // });
  let todos = await Todo.find();
  console.log(todos);
  res.json(todos);
});

router.get(("/:id"), async (req, res) => {
  // let id = req.params.id;
  // Todo.findById(id, function (err, todo) {
  //   res.json(todo);
  // });
  let id = req.params.id;
  let todos = await Todo.findById(id).catch(err => {
    console.log("get todo err", err);
    res.status(400).send('get todo failed');
  });
  res.json(todos);
});

router.post(("/add"), async (req, res) => {
  // let todo = new Todo(req.body);
  // todo.save()
  //   .then(todo => {
  //     res.status(200).json({ 'todo': 'todo added successfully' });
  //   })
  //   .catch(err => {
  //     res.status(400).send('adding new todo failed');
  //   });
  let todo = new Todo(req.body);
  await todo.save().catch(err => {
    console.log("add todo err", err);
    res.status(400).send('add todo failed');
  });
  res.status(200).json({ 'todo': 'todo added successfully' });
});

router.post(("/update/:id"), async (req, res) => {
  // Todo.findById(req.params.id, function (err, todo) {
  //   if (!todo)
  //     res.status(404).send("data is not found");
  //   else
  //     todo.todo_description = req.body.todo_description;
  //   todo.todo_responsible = req.body.todo_responsible;
  //   todo.todo_priority = req.body.todo_priority;
  //   todo.todo_completed = req.body.todo_completed;

  //   todo.save().then(todo => {
  //     res.json('Todo updated!');
  //   })
  //     .catch(err => {
  //       res.status(400).send("Update not possible");
  //     });
  // });
  let todo = await Todo.findById(req.params.id).catch(err => {
    console.log("update todo err", err);
    res.status(400).send('update todo failed');
  })
  if (!todo)
    if (!todo)
      res.status(404).send("data is not found");
    else
      todo.todo_description = req.body.todo_description;
  todo.todo_responsible = req.body.todo_responsible;
  todo.todo_priority = req.body.todo_priority;
  todo.todo_completed = req.body.todo_completed;
  //
  await todo.save().catch(err => {
    console.log("update todo err", err);
    res.status(400).send("Update not possible");
  });
  res.json('Todo updated!');
});

module.exports = router;