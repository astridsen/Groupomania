const { Sequelize, DataTypes  } = require("sequelize");

const sequelize = require('../utils/database');
const User = require('../models/user');
const Post = require('../models/post');

const Comment = sequelize.define ("comment", {
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
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1, 255],
        },
    }
});

User.belongsToMany(Post, { through: Comment });
Post.belongsToMany(User, { through: Comment });
Comment.belongsTo(Post);
Comment.belongsTo(User);
Post.hasMany(Comment);
User.hasMany(Comment);

module.exports = Comment;

sequelize.sync().then(() => {
    console.log('Comment table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});
