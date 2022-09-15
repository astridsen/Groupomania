const { Sequelize, DataTypes  } = require("sequelize");

const sequelize = require('../utils/database');

const User = require('../models/user');

const Post = require('../models/post');

const Like = sequelize.define("like", {
    postId: {
        type: DataTypes.INTEGER,
        references: 'post',
        key: 'id'
    },
    userId: {
        type: DataTypes.INTEGER, 
        references: {
            model: 'user',
            key:'id'
        }
    }
});

User.belongsToMany(Post, { through: Like });
Post.belongsToMany(User, { through: Like });
Like.belongsTo(Post);
Like.belongsTo(User);
Post.hasMany(Like);
User.hasMany(Like);

module.exports = Like;

sequelize.sync().then(() => {
    console.log('Like table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
});
