const { Usuario } = require("../../db");
//getAll User te duvuelve todos los usuarios salvo si le pasas un id por body
async function getAllUsers(req, res, next) {
  const { id } = req.body;
  try {
    //en caso de req tener un body con el id te devuelve ese usuario solo
    if (id) {
      const user = await Usuario.findOne({
        where: {
          id,
        },
      });
      res.status(200).send(user);
    } else {
      //caso contrario devuelve todos los usuarios
      const users = await Usuario.findAll({
      });
     res.status(200).send(users);
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { getAllUsers };