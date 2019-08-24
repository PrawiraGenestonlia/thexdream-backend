const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
  user_id: {
    type: String
  },
  created_time: {
    type: Date
  },
  todo_description: {
    type: String
  },
  todo_description: {
    type: String
  },
  todo_responsible: {
    type: String
  },
  todo_priority: {
    type: String
  },
  todo_completed: {
    type: Boolean
  }
});

module.exports = mongoose.model('Todo', Todo);