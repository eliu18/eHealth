require('dotenv').config();

let config = {};

if (process.env.NODE_ENV === "development") {
    config = {
        PORT: process.env.DEV_PORT,
        HOST: process.env.DEV_HOST,
        DB_USER: process.env.DEV_DB_USER,
        DB_PASSWORD: process.env.DEV_DB_PASSWORD,
        DB_HOST: process.env.DEV_DB_HOST,
        DB_NAME: process.env.DEV_DB_NAME,
    };

} else if (process.env === "production") {
    config = {
        PORT: process.env.DEV_PORT,
        HOST: process.env.DEV_HOST,
        DB_USER: process.env.DEV_DB_USER,
        DB_PASSWORD: process.env.DEV_DB_PASSWORD,
        DB_HOST: process.env.DEV_DB_HOST,
        DB_NAME: process.env.DEV_DB_NAME,
    };
}

module.exports = config;