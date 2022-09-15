const Comment = require("../models/comment");

const User = require("../models/user");

const Post = require("../models/post");

exports.createComment = (req, res) => {
    Post.findOne({ where: { id: req.params.postId}})
        .then((post) => {
        if (!post) {
            return res.status(401).json({ error: "Post no found" });
        } else {
            const userId = req.auth.userId;
            const postId = req.params.postId;
            const text = req.body.text;
            try {
                const comment = Comment.create({postId, userId, text});
                res.status(201).json({ message: "Comment created" });
            } catch (error) {
                return res.status(400).send(error);
            }}})
        .catch((error) => res.status(500).send({ message: "Comment not created" + error }))
    };