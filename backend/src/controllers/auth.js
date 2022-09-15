const bcrypt = require('bcrypt');

const User = require('../models/user');

const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
    const { firstname, lastname, email, password, isAdmin } = req.body;
    try {
        const user = User.create({ firstname, lastname, email, password, isAdmin });
        res.status(201).json({ user: user.id, message: 'Created user !' });
      } catch (error) {
        res.status(500).json({ error })
      }
};

exports.login = (req, res) => {
    User.findOne({ where : { email: req.body.email } })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'User no found !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Invalid password !' });
                    }
                    res.status(200).json({
                        userId: user.id,
                        isAdmin: user.isAdmin,
                        token: jwt.sign(
                            { userId: user.id,
                             isAdmin: user.isAdmin },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.logout = (req, res) => {
    res.redirect('/');
};