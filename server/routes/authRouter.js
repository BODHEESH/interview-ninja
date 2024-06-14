const express = require('express');
const { authCtrlRegister } = require('../controllers/authController');
const router = express.Router();

// Sample authentication routes
router.post('/login', (req, res) => {
    // Login logic
});

router.post('/register', authCtrlRegister)
module.exports = router;
