const { Estudio, Sede, Usuario } = require("../../db");

//Esta funcion crea estudios para cada usuario, necesitas pasarle los datos correspondientes y te devuelve una respuesta

async function createEstudio(req, res, next) {

    // le pasamos los datos del usuario por body
    const { studyEco , studyDoppler } = req.body;

    try {
        

        if(studyEco && !studyDoppler){

        const estudio = await Estudio.create({

            method : studyEco.method,
            reference : null ,
            clasification : studyEco.clasification,
            files : studyEco.files,
            notes : studyEco.notes,
            date : studyEco.date,
            usuarioId : studyEco.userId,
            sedeName : studyEco.sedeName

        });
        res.status(200).send({message: "estudio creador" , study: estudio})
        }


        if(studyEco && studyDoppler){

            const estudio = await Estudio.create({
                method : studyEco.method,
                reference : studyEco.reference ,
                clasification : studyEco.clasification,
                files : studyEco.files,
                notes : studyEco.notes,
                date : studyEco.date,
                usuarioId : studyEco.userId,
                sedeName : studyEco.sedeName
            });

            const estudioConDoppler = await Estudio.create({
                method : studyDoppler.method,
                reference : estudio.id ,
                clasification : studyDoppler.clasification,
                files : studyDoppler.files,
                notes : studyDoppler.notes,
                date : studyDoppler.date,
                usuarioId : studyEco.userId,
                sedeName : studyEco.sedeName
            });
        res.status(200).send({message: "estudios creados" , study: estudio , studyTwo: estudioConDoppler})


        }
        else if (!studyEco && !studyDoppler){
        
        res.status(400).send({message: "fallo la creacion del estudio"})
    }
    } catch (error) {
        next(error);
    }
}

module.exports = { createEstudio };