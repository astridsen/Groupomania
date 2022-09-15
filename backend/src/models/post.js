const { Sequelize, DataTypes  } = require("sequelize");

const user = require('../models/user');

const sequelize = require('../utils/database');

const Post = sequelize.define("post", {
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
},);

Post.associate = (user) => {
    Post.belongsTo(user, 
    {
      foreignKey: "userId",
      as: "users",
    });
    return Post;
};

sequelize.sync().then(() => {
    console.log('Post table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
});
  
module.exports = Post