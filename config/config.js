require('dotenv').config(); // this is important!
module.exports = {
    
"development": {
    "username": process.env.DBUsername,
    "password": process.env.DBPassword,
    "database": process.env.DBName,
    "host": process.env.DBHost,
    "port": process.env.DBPort,
    "dialect": "mysql",
    // Use a different storage. Default: none
    "seederStorage": "json",
    // Use a different file name. Default: sequelize-data.json
    "seederStoragePath": "sequelizeData.json",
    // Use a different table name. Default: SequelizeData
    "seederStorageTableName": "sequelize_data"
},
"test": {
    "username": process.env.DBUsername,
    "password": process.env.DBPassword,
    "database": process.env.DBName,
    "host": process.env.DBHost,
    "port": process.env.DBPort,
    "dialect": "mysql",
    // Use a different storage. Default: none
    "seederStorage": "json",
    // Use a different file name. Default: sequelize-data.json
    "seederStoragePath": "sequelizeData.json",
    // Use a different table name. Default: SequelizeData
    "seederStorageTableName": "sequelize_data"
},
"production": {
    "username": process.env.DBUsername,
    "password": process.env.DBPassword,
    "database": process.env.DBName,
    "host": process.env.DBHost,
    "port": process.env.DBPort,
    "dialect": "mysql",
    // Use a different storage. Default: none
    "seederStorage": "json",
    // Use a different file name. Default: sequelize-data.json
    "seederStoragePath": "sequelizeData.json",
    // Use a different table name. Default: SequelizeData
    "seederStorageTableName": "sequelize_data"
}
};

