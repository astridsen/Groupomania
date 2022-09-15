const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/comment');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/:postId/comment', auth, commentCtrl.createComment);
/**router.get('/:postId/comment/:id/display', auth, commentCtrl.getAllComments);
router.put('/:postId/comment/:id', auth, commentCtrl.updateComment);
router.delete("/:postId/comment/:id", auth, commentCtrl.deleteComment);*/

module.exports = router;