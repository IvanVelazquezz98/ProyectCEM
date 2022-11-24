const { Sede } = require("../../db");
//getAll User te duvuelve todos los usuarios salvo si le pasas un id por body
async function getAllSede(req, res, next) {
  const { id } = req.body;
  try {
    //en caso de req tener un body con el id te devuelve ese usuario solo
    if (id) {
      const sede = await Sede.findOne({
        where: {
          id,
        },
      });
      res.status(200).send(sede);
    } else {
      //caso contrario devuelve todos los usuarios
      const allSede = await Sede.findAll({
      });
     res.status(200).send(allSede);
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { getAllSede };