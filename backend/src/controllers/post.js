const Post = require('../models/post');

const User = require('../models/user');

exports.createPost = (req, res) => {
    User.findOne({ where: { id: req.auth.userId }})
    .then((user) => {
        if (user.id != req.auth.userId) {
            res.status(401).json({ message: 'Not authorized '});
        } else {
            const text = req.body.post;
            const imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
            const userId = user.id;
            try {
                const post = Post.create({ text, imageUrl, userId });
                res.status(201).json({ message: 'Created post !' });
              } catch (error) { res.status(500).json({ error })}
        }})
    .catch((error) => res.status(500).send({ message: "User not found - Error: " + error })
    )
};

exports.getOnePost = (req, res) => {
    Post.findOne({id: req.params.id})
    .then((post) => {res.status(200).json(post)})
    .catch((error) => {res.status(404).json({error: error});});
};

exports.getAllPost = (req, res) => {
    Post.findAll()
    .then((post) => {res.status(200).json(post)})
    .catch((error) => {res.status(400).json({error: error});
      }
    );
};

/*exports.getAllPostsbyUser = (req, res) => {
    User.findOne({where : { id: req.params.userId}})
    .then((user) => {
        if (!user) {
            return res.status(401).json({ error: "User no found" }); 
        } else {
            Post.findAll({
                where : { userId: req.params.id},
                order: [['createdAt', 'DESC'],]
            })
            .then((posts) => {
                const postList = posts.map(post => {
                    return Object.assign({},
                        {
                            id: post.id,
                            createdAt: post.createdAt,
                            text: post.text,
                            imageUrl: post.imageUrl,
                            userId: req.params.id,
                            lastname: post.User.lastname,
                            firstname: post.User.firsname,
                            pictureUrl: post.User.pictureUrl
                        }
                    )
                })
                res.status(200).json({postList})
            })
            .catch((error) => {res.status(400).json({error: error})});
        }})
    .catch((error) => {res.status(500).json({error: error});
    })
}*/

exports.getAllPostsbyUser = (req, res, next) => {
    Post.findAll({
        where: { userId: req.params.id },
        include: {
            model : User,
            attributes: ["lastname", "firstname", "pictureUrl"]
        },
        order: [["id", "DESC"]]
    })
    .then(posts => {
        const postList = posts.map(post => {
            return Object.assign({},
                {
                    id: post.id,
                    createdAt: post.createdAt,
                    text: post.text,
                    imageUrl: post.imageUrl,
                    userId: post.userId,
                    lastname: post.User.lastname,
                    firstname: post.User.firstname,
                    pictureUrl: post.User.pictureUrl,
                }
            )
        })
        res.status(200).json({ postList })
    })
    .catch(error => res.status(400).json({error: error}))
};

exports.updatePost = (req, res, next) => {
    const postObject = req.file ? {
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get('host')}/src/images/${req.file.filename}`
    } : { ...req.body };
  
    delete postObject.userId;
    Post.findOne( { where : {id: req.params.id }})
        .then((post) => {
            if (post.userId != req.auth.userId && req.auth.isAdmin != true ) {
                res.status(401).json({ message : 'Not authorized' });
            } else {
                Post.update(
                    {
                        ...postObject,
                        id: req.params.id
                    },
                    {
                      where: {
                        id: post.id,
                      },
                    }
                  )
                .then(() => res.status(200).json({message : 'Modified post ! '}))
                .catch(error => res.status(401).json({ error }));
            }
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
};

exports.deletePost = (req, res) => {
    Post.findOne( { where : { id: req.params.id }})
        .then((post) => {
            if (post.userId != req.auth.userId && req.auth.isAdmin != true ) {
                res.status(401).json({ message: 'Not authorized' });
            } else {
                Post.destroy( { where : { id: req.params.id}})
                        .then(() => { res.status(200).json({message: 'Deleted post !' })})
                        .catch(error => res.status(401).json({ error }));
                };
            })
        .catch( error => {
            res.status(500).json({ error });
        });
};

