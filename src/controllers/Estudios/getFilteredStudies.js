const { Estudio, Usuario, Sede } = require("../../db");

async function getFilteredStudies(req, res, next) {

  const { userId,
    daySelected,
    monthSelected,
    valueCheckBox
  } = req.body;


  try {

    const estudios = await Estudio.findAll({
      where: {
        usuarioId: userId,
      },
      if(daySelected) {
        where: {

        }
      }
    });

    if (estudios) {
      res.status(200).send({
        existe: true,
        study: estudios
      });
    } else {

      res.status(200).send({
        existe: false,
        msg: 'no tiene estudios'
      })
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { getEstudioForUser };