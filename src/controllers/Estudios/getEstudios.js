const { Estudio, Sede, Usuario } = require("../../db");



async function getEstudio (req, res, next){
    const {day , month} = req.body
   let allStudys = await Estudio.findAll({}) 

    try{
        if(month){
            let monthFilter = await Estudio.findAll({
                where:{
                    date: month
                }
                
            })
            res.status(200).send(monthFilter);
        }
        if(day) {
            let dayFilter = await Estudio.findAll({
                where:{
                    date: day
                }
                
            })
            res.status(200).send(dayFilter);
        }
        else if(month && day){
            let filterMonthDay = await Estudio.findAll({
                where:{
                    date : day , month
                }
            })
            res.status(200).send(filterMonthDay);
        }
        else{
            res.status(400).send({message: "algo salio mal"});
        }

    }catch(error){
        console.log(error)
    }
}
module.exports = { getEstudio };