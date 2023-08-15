const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController'); 

router.get('/home', UserController.Home);
router.get('/', UserController.getAllUsers);

module.exports = router;
