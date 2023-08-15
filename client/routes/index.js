const express = require('express');
const router = express.Router();

const usersRouter = require('./user');

router.use('/users', usersRouter);
router.all('*', function(req, res) {res.redirect('/users');});

module.exports = router;
