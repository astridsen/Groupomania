const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require('../utils/database');

const bcrypt = require("bcrypt");

const user = sequelize.define("user", {
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 50],
        },
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 50],
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [6, 1000],
        },
      },
      pictureUrl: {
        type: DataTypes.STRING,
        defaultValue:
          "http://localhost:3000/images/default_profile_picture.png",
      },
      bio: {
        type: DataTypes.STRING(200),
        defaultValue: "Biographie vide",
        validate: {
          len: [0, 200],
        },
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      hooks: {
        beforeCreate: async (user) => {
          if (user.password) {
            const salt = await bcrypt.genSaltSync(10);
            user.password = bcrypt.hashSync(user.password, salt);
          }
        },
      },
    },
);

sequelize.sync().then(() => {
    console.log('User table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
  
// Exporting User, using this constant
// we can perform CRUD operations on
// 'user' table.
module.exports = user