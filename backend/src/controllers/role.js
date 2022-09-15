/*const Role = require('../models/role');

const User = require('../controllers/user');

exports.createRole = (req, res) => {
    const role = {
		name: req.body.name,
	};
	Role.create(role)
		.then((role) => {
			res.status(201).json({ role : role.id, message: 'Role added !' });
		})
		.catch((error) => res.status(500).send({ message : "Not added Role : " + error})
        )
};*/

