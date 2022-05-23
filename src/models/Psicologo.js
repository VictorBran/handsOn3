const db = require('../database');
const { DataTypes } = require('sequelize')

const Psicologo = db.define("Psicologo", {
    idPsicologo: {  
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apresentacao:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
},{
    tableName: "psicologo",
}
);

module.exports = Psicologo;