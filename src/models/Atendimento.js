const { DataTypes } = require('sequelize')
const db = require('../database');
const Paciente = require('./Paciente')
const Psicologo = require('./Psicologo')

const Atendimento = db.define(
    'Atendimento', 
    {
    id_atendimento: {  
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
      },    
    data_atendimento: {
        type: DataTypes.DATE,
        allowNull: false,
      },  
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    psicologo_id: {  
        type: DataTypes.INTEGER,
        references:{
            model: Psicologo,
            key: "id_psicologo",
        },
        unique: true,
      },     
    paciente_id: {  
        type: DataTypes.INTEGER,
        references:{
            model: Paciente,
            key: "id_paciente",
        }, 
        unique: true, 
      },
    },
    
    {tableName: 'atendimento', timestamps: false, underscored: true}
);

module.exports = Atendimento;