const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
};
