const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');
const likeCtrl = require('../controllers/like');
const commentCtrl = require('../controllers/comment');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, postCtrl.createPost);
router.get('/:id', auth, postCtrl.getOnePost);
router.get('/', auth, postCtrl.getAllPost);
router.put('/:id', auth, multer, postCtrl.updatePost)
router.delete('/:id', auth, postCtrl.deletePost);

router.post('/:id', auth, likeCtrl.addLike);
router.get('/:id/like', auth, likeCtrl.getAllLikes);
router.delete('/:id/like', auth, likeCtrl.deleteLike);

router.post('/:postId', auth, commentCtrl.createComment);
/**router.get('/:postId/comment/:id/display', auth, commentCtrl.getAllComments);
router.put('/:postId/comment/:id', auth, commentCtrl.updateComment);
router.delete("/:postId/comment/:id", auth, commentCtrl.deleteComment);*/

module.exports = router;