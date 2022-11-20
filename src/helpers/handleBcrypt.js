const bcrypt = require ('bcryptjs')
//bcrypt es una libreria para encriptar contraseñas
//encrypt hace el encriptado.
const encrypt = async (textPplain ) => {
  const hash = await bcrypt.hash( textPplain, 10);
  return hash;
}
//compare lo que hace es q recibe dos argumentos, uno la password que se ingresa
//y la otra la que esta encryptada. Para saber si la contra es correcta
const compare = async (textPlain, hashPassword  )   => { 
  const result = await bcrypt.compare(textPlain, hashPassword);
  return result;
}

module.exports = { encrypt, compare }