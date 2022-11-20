const { Usuario } = require("../../db");
//updateUser hace una actualizacion al usuario, no creo que lo usemos
async function updateUser(req, res, next) {
  const {
    id,
    email,
    name,
    lastName,
    birthDay
  } = req.body;
//basicamente recibe los parametros por body
  try {
//busca si el usuario existe por medio del id
    const user = await Usuario.findOne({ where: { id } });
//si no existe devuelte un booleano mas un msj
    if (!user) return res.status(404).json({existe:false,msg:'user not found'});
    else {
//en el otro caso es pq si hay usuario y procede a actualizar su info con la info de req.body
      let usDB = await user.update({
        email,
        name,
        lastName,
        birthDay,
      });

      if(usDB.length > 0 ) return res.status(200).json(usDB);
      else return res.status(400).json({msg: "error al modificar"})
    }
    
  } catch (err) {
    next(err);
  }
}

module.exports = { updateUser };