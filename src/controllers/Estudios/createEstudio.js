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
        });

        let sede = await Sede.findByPk(sedeId);

        let estudioConSede = await estudio.addSede(sede);

        let usuario = await Usuario.findByPk(userId);

        let estudioConUsuario = await estudio.addUsuario(usuario);

        //Si hay algun error al crear el estudio el backend te devuelve el siguiente mensaje
        if (!estudioConSede) {
            res.status(401).send({ message: "no se pudo identificar la sede" })
        } else if (!estudioConUsuario) {
            res.status(402).send({ message: "no se pudo identificar el usuario" })
        } else if (!estudio) {
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