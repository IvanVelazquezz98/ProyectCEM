const { Router } = require("express");
const { createSede } = require("../controllers/Sedes/createSede");
const { getAllSede } = require("../controllers/Sedes/getAllSede")

const router = Router();

router.post("/create", createSede);
router.get("/All" , getAllSede)


module.exports = router;