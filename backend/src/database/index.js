const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('locatrator', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;