const { Atendimento } = require("../models");

module.exports = async (req, res, next) => {
  if (req.auth) {
    const psicologo = await Atendimento.findByPk(req.auth.psicologo_id);
    if (!psicologo) {
      next({
        status: 401,
        name: "UnauthorizedError",
        inner: {
          message: "Invalid user code",
        },
      });
    }
  }

  next();
};