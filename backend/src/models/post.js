const { Sequelize, DataTypes  } = require("sequelize");

const sequelize = require('../utils/database');

const post = sequelize.define("post", {
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1, 255],
        },
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      imageUrl: {
        type: DataTypes.STRING,
      },
      likes: { 
        type: DataTypes.INTEGER,
    },
    dislikes: {
        type: DataTypes.INTEGER,
    },
    usersLiked: {
        type: DataTypes.STRING,
    },
    usersDisliked: {
        type: DataTypes.STRING,
    },
},);

sequelize.sync().then(() => {
    console.log('Post table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
});
  
module.exports = post