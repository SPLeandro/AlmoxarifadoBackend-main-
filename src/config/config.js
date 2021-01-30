require('dotenv/config');

module.exports = {
    database: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        name: process.env.DB_NAME,
        dialect: process.env.DB_DIALECT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        encrypt:process.env.DB_ENCRYPT
    }
    
}
