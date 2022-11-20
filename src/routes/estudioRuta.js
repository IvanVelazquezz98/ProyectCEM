const { Router } = require("express");
const { createEstudio } = require("../controllers/Estudios/createEstudio");
const { updateEstudio } = require("../controllers/Estudios/updateEstudio");


const router = Router();
//para que este mas ordenadito y no esten todas las funciones aca las pase en controllers

router.post("/create", createEstudio);
router.put("/update" , updateEstudio)

module.exports = router;