const express = require('express');
const router = express.Router();

// Sample course routes
router.get('/', (req, res) => {
    // Get all courses
});

router.get('/:id', (req, res) => {
    // Get course by ID
});

router.post('/', (req, res) => {
    // Create a new course
});

router.put('/:id', (req, res) => {
    // Update course by ID
});

router.delete('/:id', (req, res) => {
    // Delete course by ID
});

module.exports = router;
