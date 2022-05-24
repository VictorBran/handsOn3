const { Sequelize } = require("sequelize");

const DB_NAME = "la_vie";
const DB_USER = "root";
const DB_PASS = "Vitinho0080";
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306
};

let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
   console.error("erro ao tentar a conexão", error.message) 
}

const hasConnection = async () => {
    try {
        await db.authenticate();
        console.log("banco conectado :)")
    } catch (error) {
        console.error("erro ao tentar conectar :(", error.message)
    }
}

Object.assign(db, {hasConnection})

module.exports = db;