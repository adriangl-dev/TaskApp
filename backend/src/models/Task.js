const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    data: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Task", TaskSchema);