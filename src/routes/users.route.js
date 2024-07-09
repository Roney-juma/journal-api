const express = require('express');
const { registerUser, loginUser } = require('../controllers/users.controller');
const router = express.Router();

// User Registration
router.post('/signup', registerUser);

// User Login
router.post('/login', loginUser);

module.exports = router;

