const Sequelize = require('sequelize');               // Importing Sequelize library
require('dotenv').config();

let sequelize;                                        

if (process.env.JAWSDB_URL) {                           // Checking if JAWSDB_URL environment variable exists
  sequelize = new Sequelize(process.env.JAWSDB_URL);    
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,                  // Database name
    process.env.DB_USER,                  // Database username
    process.env.DB_PASSWORD,              // Database Password
    {
      host: 'localhost',    // Database host
      dialect: 'mysql',      // Database dialect
      port: 3306            // Database Port
    }
  );
}


module.exports = sequelize;   // EXPORT