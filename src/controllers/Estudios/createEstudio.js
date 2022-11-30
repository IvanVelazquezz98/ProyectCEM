const { Estudio, Sede, Usuario } = require("../../db");

//Esta funcion crea estudios para cada usuario, necesitas pasarle los datos correspondientes y te devuelve una respuesta

async function createEstudio(req, res, next) {

    // le pasamos los datos del usuario por body
    const { name, method, reference, priority, files,
        notes, userId, sedeId } = req.body;

    try {

        //agarramos los datos del usuario para crear un nuevo estudio con los datos proporcionados
        const estudio = await Estudio.create({
            name,
            method,
            reference,
            priority,
            files,
            notes,
            userId,
            sedeId
        });

        //Si hay algun error al crear el estudio el backend te devuelve el siguiente mensaje
        if (!estudio) {
            res.status(400).send({ message: "Oops no se pudo crear el pack :(" })
        }
        //En caso de que los datos hayan sido proporcionados de forma correcta se procede a crear el estudio
        // y devolverte la informacion del mismo
        else { res.status(200).send({ message: "estudio creado", estudio: estudio }); }

    } catch (error) {
        next(error);
    }
}

module.exports = { createEstudio };