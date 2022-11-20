const { Sede } = require("../../db");

//Esta funcion crea sedes para cada usuario, necesitas pasarle los datos correspondientes y te devuelve una respuesta

async function createSede(req, res, next) {

    // le pasamos los datos del usuario por body
    const { name, userId } = req.body;

    try {

        //agarramos los datos del usuario para crear un nuevo sede con los datos proporcionados
        const sede = await Sede.create({
            name,
            userId
        });

        //Si hay algun error al crear el estudio el backend te devuelve el siguiente mensaje
        if (!sede) {
            res.status(400).send({ message: "Oops no se pudo crear la sede :(" })
        }
        //En caso de que los datos hayan sido proporcionados de forma correcta se procede a crear la sede
        // y devolverte la informacion del mismo
        else { res.status(200).send({ message: "estudio creado", sede: sede }); }

    } catch (error) {
        next(error);
    }
}

module.exports = { createSede };