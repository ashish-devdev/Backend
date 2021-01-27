const express = require('express');
const router = express.Router();
const user_controller = require('../controler/arthematic_operation.controler');

router.post('/create', user_controller.user_create);
router.get('/user-get', user_controller.userGet_info);

module.exports = router;

