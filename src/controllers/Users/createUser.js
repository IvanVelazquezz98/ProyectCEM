const { Usuario} = require("../../db");
const { encrypt } = require("../../helpers/handleBcrypt");

//Create user crea al usuario
async function createUser(req, res, next) {

  try {
    //deberia llegarle por body email password y name
    const { email, name, password , sede } = req.body;
    //con este if comprobamos que el usuario no exista, y llenamos o no la const user
    if (email && name && password) {
      const user = await Usuario.findAll({
        where: { email: email },
      })
//se user no tiene nada significa que no existe 
      if (user.length === 0) {
        const passwordHash = await encrypt(password);
        let user = await Usuario.create({
          email,
          name,
          password: passwordHash,
          type: "User",
          sedeName: sede
        });
// porlotanto creamos al usuario , tambien usamos encrypt para hashear la password
         res.status(200).send({ Msg: "Usuario creado con exito", user:user});

      } else {
//si entra a este else es porque el user si se encontro porlotanto existe y no se puede crear
        res.status(400).json({ msg: "este usuario ya se encuentra registrado" })
      }

    } else {
//en este caso algo salio mal 
    res.status(400).json({ msj: "falta algun campo" })
    }

  } catch (error) {
    next(error);
  }
}

module.exports = { createUser };