const { Usuario } = require("../../db");
//getAll User te duvuelve todos los usuarios salvo si le pasas un id por body
async function getAllUsers(req, res, next) {
  const { email } = req.body;
  try {
    //en caso de req tener un body con el id te devuelve ese usuario solo
    if (email) {
      const user = await Usuario.findOne({
        where: {
        email,
        },
      });
      res.status(200).send({user:user});
    } else {
      //caso contrario devuelve todos los usuarios
      const users = await Usuario.findAll({
      });
     res.status(200).send({users:users});
    }
  } catch (error) {
    res.status(400)
  }
}

module.exports = { getAllUsers };