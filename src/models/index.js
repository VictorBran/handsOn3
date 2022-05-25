const Atendimento = require('./Atendimento');
const Paciente = require('./Paciente');
const Psicologo = require('./Psicologo')

Paciente.belongsTo(Atendimento, {
    foreignKey: "id_paciente",
})
Atendimento.hasMany(Paciente, {
    foreignKey: "id_paciente",
})

Psicologo.belongsTo(Atendimento, {
    foreignKey: "id_psicologo",
})
Atendimento.hasMany(Psicologo, {
    foreignKey: "id_psicologo",
})

module.exports = {
    Atendimento,
    Paciente,
    Psicologo
};
