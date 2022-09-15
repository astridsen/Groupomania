const bcrypt = require('bcrypt');

const User = require('../models/user');

const jwt = require('jsonwebtoken');

const fs = require('fs');

exports.getOneUser = (req, res) => {
    User.findOne({ 
        where : {id: req.params.id},
        attributes: { exclude: ["password", "email"] }, })
    .then((user) => {res.status(200).json(user)})
    .catch((error) => {res.status(404).json({error: error});});
};

exports.getAllUsers = (req, res) => {
    User.findAll({ attributes: { exclude: ["password", "email"] }})
    .then((users) => { res.status(200).json(users); })
    .catch((error) => { res.status(400).json({ error: error});});
};

exports.updateUser = (req, res) => {
    const userObject = req.file ? {
        ...JSON.parse(req.body.user),
        pictureUrl: `${req.protocol}://${req.get('host')}/src/images/${req.file.filename}`
    } : { ...req.body };
    
    delete userObject.userId;
    User.findOne({
        where: { id: req.params.id },
        attributes: { exclude: ["password", "email"] },
      })
        .then((user) => {
            if (user.id != req.auth.userId && req.auth.isAdmin != true ) {
                res.status(401).json({ message: 'Not authorized '});
            } else {
          User.update(
            {
            ...userObject,
              lastname: req.body.lastname,
              firstname: req.body.firstname,
              bio: req.body.bio,
            },
            {
              where: {
                id: user.id,
              },
            }
          )
            .then(() => res.status(201).send({ message: "User updated" }))
            .catch((error) => res.status(400).send({ message: "Error: " + error }));
        }})
        .catch((error) =>
          res.status(500).send({ message: "User not found - Error: " + error })
        );
};

exports.deleteUser = (req, res) => {
    User.findOne( { where : { id: req.params.id}})
        .then(user => {
            if (user.id != req.auth.userId && req.auth.isAdmin != true) {
                res.status(401).json({ message: 'Not authorized '});
            } else {
                User.destroy( { where : { id: req.params.id}})
                        .then(() => { res.status(200).json({message: 'Deleted user !'})})
                        .catch(error => res.status(401).json({ error }));
                };
            })
        .catch( error => {
            res.status(500).json({ error });
        });
};