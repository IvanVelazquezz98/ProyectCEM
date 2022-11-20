const { Router } = require("express");
const { createSede } = require("../controllers/Sedes/createSede");


const router = Router();

router.post("/create", createSede);


module.exports = router;