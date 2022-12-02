const { Estudio, Sede, Usuario } = require("../../db");



async function getEstudio (req, res, next){

try{
    let allStudys = await Estudio.findAll({}) 
    res.status(200).send(allStudys)

}catch(error){
    res.status(400)
    next(error)
}
   

   

    
}
module.exports = { getEstudio };