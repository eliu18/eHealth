require('dotenv').config();

let config = {};

if (process.env.NODE_ENV === "development") {
    config = {
        PORT: process.env.DEV_PORT,
        HOST: process.env.DEV_HOST
    }

} else if (process.env === "production") {
    config = {
        PORT: process.env.PROD_PORT,
        HOST: process.env.PROD_HOST
    }
}

module.exports = config;