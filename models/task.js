const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    dueDate:{
        type: Date,
        required: true
    },
    category:{
        type: String
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;