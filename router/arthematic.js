const express = require('express');
const router = express.Router();
const user_controller = require('../controler/arthematic_operation.controler');

router.post('/create', user_controller.user_create);
router.get('/user-get', user_controller.userGet_info);
router.get('/user-get-by-id', user_controller.user_get_by_id);
router.post('/post-image',user_controller.post_image);


module.exports = router;

