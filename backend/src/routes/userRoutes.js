const express = require('express');
const router = express.Router();
const userControler = require('../controllers/userControler');

//define User routes
router.get('/',userControler.getAllUsers);
router.post('/', userControler.createUser);

module.exports = router;