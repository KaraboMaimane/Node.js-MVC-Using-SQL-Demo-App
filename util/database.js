const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Mavusana23.', {
    host: 'localhost',
    dialect: 'mysql'
} );

module.exports = sequelize;