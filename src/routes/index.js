const { Router } = require('express');


const usersRoute = require("./usuarioRuta.js")
const sedeRoute = require("./sedeRuta.js")
const studyRoute = require("./estudioRuta.js")
const router = Router();



//para que este mas ordenadito los dividimos, asi no se hace un mejunje de rutas
router.use('/api/users' , usersRoute)
router.use('/api/sede' , sedeRoute)
router.use('/api/study' , studyRoute)




module.exports = router;

