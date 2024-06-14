// controllers/QuestionController.js

const Question = require('../models/Question');

const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createQuestion = async (req, res) => {
    console.log(req.body, "req body logged in");
    const question = new Question({
        subject: req.body.subject,
        question: req.body.question,
        answer: req.body.answer,
    });

    try {
        const newQuestion = await question.save();
        res.status(201).json(newQuestion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllQuestions,
    createQuestion
};
