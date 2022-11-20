const { Usuario } = require("../../db");
//getUserByEmail busca un usuario por su email
async function getUserByEmail(req, res, next) {
  //deberia resibir por params un mail
  const { email } = req.params;
  try {
  //en caso de que se encuentre llenamos la const user
      const user = await Usuario.findOne({
        where: {
          email,
        },
      });
//si user no esta vacio es porque elo usuario existe y te devuelte un boleano para 
//hacer mas facil la comprobacion en front mas el usuario
      if(user){
      res.status(200).send({existe:true,
      user:user});
     }else {
//si entra en else es pq no existe el usuario, te devuelve un booleano para hacer mas facil
//la comprobacion.
        res.status(200).send({existe:false,
        msg:'el usuario no existe'})
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { getUserByEmail };