const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    subject: String,
    question: String,
    answer: String,
}, { timestamps: true });

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
