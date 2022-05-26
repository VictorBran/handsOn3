const Psicologo = require("../models/Psicologo");
const bcrypt = require("bcryptjs")

const psicologoController = {
    index: async (req, res) => {
        try {
            const allPsicologos = await Psicologo.findAll();
            res.status(201).json(allPsicologos);

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
            const { nome, email, apresentacao } = await Psicologo.findByPk(id);

            const psicologoById = { nome, email, apresentacao }

            if (psicologoById) {
                return res.json(psicologoById);
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
                senha,
                apresentacao,
            } = req.body;

            const novaSenha = bcrypt.hashSync(senha, 10)

            const novoPsicologo = await Psicologo.create({
                nome,
                email,
                senha: novaSenha,  
                apresentacao,                             
            });

            res.json(novoPsicologo);
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
            const { nome, email, senha, apresentacao } = req.body;

            const novaSenha = bcrypt.hashSync(senha, 10)

            await Psicologo.update(
                { nome, email, senha: novaSenha, apresentacao },
                { where: { id_psicologo: id, }, }

            );

            const psicologoAtualizado = await Psicologo.findByPk(id)
            res.json(psicologoAtualizado);
        } catch (error) {

            res.status(400).json({ error: "Erro na requisição" });

        }
    },

    destroy: async (req, res) => {
        try {
            const { id } = req.params;
            const psicologo = await Psicologo.findByPk(id);

            if (!psicologo) {

                res.status(404).json({
                    message: "ID não encontrado",
                });
            }
            await psicologo.destroy();

            res.status(204).send("");

        } catch (error) {
            res
                .status(409)
                .json({ error: "Ação não permitida" });
            ;
        }

    }
}

module.exports = psicologoController