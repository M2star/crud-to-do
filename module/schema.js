const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength:[40, 'maxlength is 40']
      },
      description: {
        type:String,
        default:''
    },
      dueDate: Date,
      priority: {
        type: String,
        enum: ['High', 'Medium', 'Low'],
        default: 'Medium',
      },
      completed: {
        type: Boolean,
        default: false,
      },
})

const Task = mongoose.model('Task', taskSchema)
module.exports = Task