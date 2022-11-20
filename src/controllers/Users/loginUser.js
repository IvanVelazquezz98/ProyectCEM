const { token } = require("morgan");
const { Usuario } = require("../../db");
const { compare } = require("../../helpers/handleBcrypt");

//loginUser logea a un usuario 
async function loginUser(req, res, next) {
//deberia recibir email y password por body 
  const { email, password } = req.body;

  try {
//en caso de que exista el mail busca el usuario y lo guarda en la const user
    if (email) {
      const user = await Usuario.findOne({ where: { email } });
//en caso de que no haya usuario te devuelve  un 404 y un booleano
      if (!user) {
        return res.status(404).json({existe:false, msg:"El usuario no existe"});
      } else {
//en el otro caso significa que el usuario existe, pero hay que comprobar que la 
//contraseña sea la correcta. Por eso usamos compare
        const checkPassword = await compare(password, user.password);
//si checkpasswors entonces el usuaro puede ingresar pq es la misma contraseña
//en este caso se deberia llenar un estado global del front para ya tener la info del 
//usuario
        if (checkPassword) {
          const result = {
            checkpassword: checkPassword,
            userId: user.id,
            totalUser: user
          }
          return res.status(200).json(result);

        } else {
//en el otro caso la contraseña no seria correcta
          return res.status(404).json("La contraseña no es correcta");
        }
      }

    } else {
//y si no entra al primer if pq no hay email te duevuelve un msj
      return res.status(404).json({ msg: "no hay email" });

    }

  } catch (err) {
    next(err);
  }
}

module.exports = { loginUser };