const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { Psicologo } = require("../models");
const secret = require("../config/secret")

const authController = {
   
    login: async (req, res) => {
        const { email, senha } = req.body;

        const psicologo = await Psicologo.findOne({
            where: {
                email,
            }
        });

        if (!psicologo || !bcrypt.compareSync(senha, psicologo.senha)) {
            return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente");
          }

        const psicologoUser =  {
        id_psicologo: psicologo.id_psicologo, 
        nome: psicologo.nome, 
        email: psicologo.email}

        const token = jwt.sign(psicologoUser, secret.key);

        return res.status(200).json({
            token,
            psicologoUser,
          });
    }
};

module.exports = authController