const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS, 
    {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
    console.log("Database authenticated successfully!");
})
.catch((error) => {
    console.log("Database authentication failed..!")
})

module.exports = sequelize;