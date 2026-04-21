require('dotenv').config();
const app = require('./app');
const sequelize = require('./config/db');
require('./model/user');
require('./model/dashboard');
require('./model/forgetPasswordRequest');
const PORT = process.env.PORT || 4000;



sequelize.sync()
.then(() => {
    app.listen(PORT, () => {
        console.log("Database sync and Server is running successfully!")
    })
})
.catch((error) => {
    console.log("Error during sync: ", error);
})