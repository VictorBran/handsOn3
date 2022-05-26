const Paciente = require("../models/Paciente")

const pacienteController = {
    index: async (req, res) => {
        try {
            const allPacientes = await Paciente.findAll();
            res.status(201).json(allPacientes);

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
            const { nome, email, data_nascimento } = await Paciente.findByPk(id);

            const pacienteById = { nome, email, data_nascimento }

            if (pacienteById) {
                return res.json(pacienteById);
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
            const {
                nome,
                email,                
                data_nascimento,
            } = req.body;

            const novoPaciente = await Paciente.create({
                nome,
                email,                
                data_nascimento,
            });

            res.json(novoPaciente);
        } catch (error) {
            console.log(error.message);
            res
                .status(500)
                .json({ error: "erro :(, tente novamente com todos os campos preenchidos" });
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, email, data_nascimento } = req.body;


            await Paciente.update(
                { nome, email, data_nascimento },
                { where: { id_paciente: id, }, }
            );

            const pacienteAtualizado = await Paciente.findByPk(id)

            if (!pacienteAtualizado) {

                res.status(404).json({
                    message: "ID não encontrado",
                });
            }

            res.json(pacienteAtualizado);
        } catch (error) {

            res.status(400).json({ error: "Erro na requisição" });

        }
    },

    destroy: async (req, res) => {
        try {
            const { id } = req.params;
            const paciente = await Paciente.findByPk(id);

            if (!paciente) {

                res.status(404).json({
                    message: "ID não encontrado",
                });
            }
            await paciente.destroy();

            res.status(204).send("");

        } catch (error) {
            console.log(error.message);
            res
                .status(409)
                .json({ error: "Ação não permitida" });
            ;
        }

    }
}

module.exports = pacienteController