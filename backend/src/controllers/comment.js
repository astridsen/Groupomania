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

exports.deleteComment = (req, res) => {
    Comment.findOne({
      where: { id: req.params.id },
    })
      .then(() => {
        Comment.destroy({
          where: {
            id: req.params.id,
          },
        })
          .then(() => res.status(200).json({ message: "Comment deleted" }))
          .catch((error) => res.status(400).send({ message: "Error: " + error }));
      })
      .catch((error) =>
        res.status(500).send({ message: "Comment not found - Error: " + error })
      );
};

exports.getAllComments = (req, res) => {
    Comment.findAll({
      where: {
        postId: req.params.postId,
      },
      order: [["createdAt", "DESC"]],
    })
      .then((comments) => res.status(200).json(comments))
      .catch((error) => res.status(400).send(error));
};

exports.updateComment = (req, res) => {
    Comment.findOne({
      where: { id: req.params.id },
    })
      .then((comment) => {
            if (comment.userId != req.auth.userId && req.auth.isAdmin != true ) {
                res.status(401).json({ message : 'Not authorized' });
            } else {
            Comment.update(
                {
                    text: req.body.text,
                },
                {
                where: {
                id: req.params.id,
                },
                })
            .then(() => res.status(200).send({ message: "Comment updated" }))
            .catch((error) => res.status(400).send({ message: "Error: " + error }));
            }
        })
      .catch((error) => res.status(500).send({ message: "Comment not found - Error: " + error })
      );
};