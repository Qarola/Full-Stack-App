const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
//const { DB } = require("../config/db.config");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model")(sequelize, Sequelize);

//Usamos hasMany()para ayudar a que un tutorial tenga muchos comentarios y 
//belongsTo()para indicar que un comentario solo pertenece a un tutorial.

module.exports = db;