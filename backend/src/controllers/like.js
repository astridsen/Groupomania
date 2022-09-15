const Like = require('../models/like');

const Post = require('../models/post');

const User = require('../models/user');

exports.addLike = (req, res) => {
	const like = {
		postId: req.params.id,
		userId: req.auth.userId,
	};
	Like.create(like)
		.then((like) => {
			res.status(201).json({ like: like.id, message: 'Like added !' });
		})
		.catch((error) => res.status(500).send({ message : "Not added Like : " + error})
        )
};

// Récupérer les likes d'un message
exports.getAllLikes = (req, res) => {
	Like.findAll({ where: { postId: req.params.id } })
		.then((post) => {
			res.status(200).json(post);
		})
		.catch((error) => res.status(500).json({ error }));
};

// Supprimer un like
exports.deleteLike = (req, res) => {
	Like.findOne({ where: { userId: req.auth.userId, postId: req.params.id } })
		.then((like) => {
			like
				.destroy()
				.then(() => res.status(200).json({ message: "Removed like" }))
				.catch((error) => { res.status(404).json({ error }); });
		})
		.catch((error) => {
			res.status(500).json({ message : "No possible to remove like" + error});
		});
};