require('dotenv').config();

// Include Sequelize module
const Sequelize = require('sequelize')
  
// Creating new Object of Sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD, {
  
        // Explicitly specifying 
        // mysql database
        dialect: 'mysql',
  
        // By default host is 'localhost'           
        host: 'localhost'
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection to database has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

  
// Exporting the sequelize object. 
// We can use it in another file
// for creating models
module.exports = sequelize