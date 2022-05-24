const Psicologo  = require("../models/Psicologo");

const PsicologoController = {
    index: async (req, res) =>{
        try {
            const allPsicologos = await Psicologo.findAll();
            res.status(201).json(allPsicologos);
            
        } catch (error) {
            console.log(error.message);
            res
                .status(200)
                .json({error})
        }
    },
    
    store: async (req, res) =>{
        try {
            const {
                nome, 
                email, 
                senha, 
                apresentacao, 
            } = req.body;

            const novoPsicologo = await Psicologo.create({
                nome,
                email,
                senha,
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

    destroy : async (req, res) =>{
        const { id } = req.params;
        
        try {
            const psicologo = await Psicologo.findByPk(id);

            if(!psicologo){

                res.status(404).json({
                    message: "ID não encontrado",
                  });
            }
            await psicologo.destroy();

            res.status(204).send("");
            
        } catch (error) {
            console.log(error.message);
            res
            .status(500)
            .json({ error: "erro encontrado :(, tente mais uma vez." });
            ;
        }
        
    }
}

module.exports = PsicologoController