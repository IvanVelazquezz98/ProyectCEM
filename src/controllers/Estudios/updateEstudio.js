const { Estudio } = require("../../db");
//updateUser hace una actualizacion al usuario, no creo que lo usemos
async function updateEstudio(req, res, next) {
    const {
        name,
        method,
        reference,
        priority,
        files,
        notes,
    } = req.body;
    //basicamente recibe los parametros por body
    try {
        //busca si el usuario existe por medio del id
        const study = await Estudio.findOne({ where: { id } });
        //si no existe devuelte un booleano mas un msj
        if (!study) return res.status(404).json({ existe: false, msg: 'study not found' });
        else {
            //en el otro caso es pq si hay usuario y procede a actualizar su info con la info de req.body
            let studyDB = await study.update({
                name,
                method,
                reference,
                priority,
                files,
                notes,
            });

            if (studyDB.length > 0) return res.status(200).json(studyDB);
            else return res.status(400).json({ msg: "error al modificar" })
        }

    } catch (err) {
        next(err);
    }
}

module.exports = { updateEstudio };