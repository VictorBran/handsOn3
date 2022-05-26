const  {Atendimento,} = require("../models")

const atendimentoController = {
    index: async (req, res) => {
        try {
            const allAtendimentos = await Atendimento.findAll();
            res.status(201).json(allAtendimentos);

        } catch (error) {
            console.log(error.message);
            res
                .status(200)
                .json({ error })
        }
    },

    show: async (req, res) => {
        try {
            const { id } = req.params;
            const { psicologo_id, 
                    data_atendimento, 
                    descricao, 
                    paciente_id } = await Atendimento.findByPk(id);

            const atendimentoById = { 
                    psicologo_id, 
                    data_atendimento, 
                    descricao, 
                    paciente_id };

            if (atendimentoById) {
                return res.json(atendimentoById);
            }

        } catch (error) {
            console.log(error.message);

            res
                .status(404)
                .json({ error: "Id não encontrado" });
        }
    },

    store: async (req, res) => {
        try {
            const {id_psicologo} = req.auth
                     
            const {                    
                paciente_id,
                data_atendimento, 
                descricao } = req.body;

            const novoAtendimento = await Atendimento.create({
                psicologo_id: id_psicologo,
                paciente_id,
                data_atendimento, 
                descricao                
            });

            res.json(novoAtendimento);
            
        } catch (error) {
            console.log(error.message);
            res
                .status(400)
                .json({ error: "erro na requisição" });
        }
    },   
}

module.exports = atendimentoController