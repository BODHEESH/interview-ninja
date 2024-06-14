const express = require('express');
const router = express.Router();
const QuestionController = require('../controllers/QuestionController');

// Get all questions
router.get('/', QuestionController.getAllQuestions);

// Create a new question
router.post('/', QuestionController.createQuestion);

module.exports = router;
