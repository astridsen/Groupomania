const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const postCtrl = require('../controllers/post');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config.js');

router.get('/:id', auth, userCtrl.getOneUser);
router.get('/', auth, userCtrl.getAllUsers);
router.get('/:id/post', auth, postCtrl.getAllPostsbyUser);
router.put('/:id', auth, multer, userCtrl.updateUser);
router.delete('/:id', auth, userCtrl.deleteUser);

module.exports = router;