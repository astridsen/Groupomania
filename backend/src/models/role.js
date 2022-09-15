/*const { Sequelize, DataTypes  } = require("sequelize");

const sequelize = require('../utils/database');

const User = require('../models/user');

const Role = sequelize.define('role', {
    id: {
        type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true
    },
    name: {
        type: Sequelize.STRING(255), allowNull: false
    },
},
);

User.belongsTo(Role);
Role.hasMany(User);

sequelize.sync().then(() => {
    console.log('Role table created successfully!');
 }).catch((error) => {
    console.error('Unable to create Role table : ', error);
});

module.exports = Role;*/