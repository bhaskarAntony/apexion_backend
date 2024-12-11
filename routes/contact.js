const express = require('express');
const { postFriend, getAllFriends, getSingleFriend } = require('../controls/contact');
const router = express.Router();

router.post('/new/contact', postFriend);
router.get('/get/contact/list', getAllFriends);
router.get('get/single/contact/:id', getSingleFriend);

module.exports = router