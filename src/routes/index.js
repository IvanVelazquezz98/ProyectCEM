const { Router } = require('express');


const usersRoute = require("./usuarioRuta.js")
const router = Router();




router.use('/api/users' , usersRoute)




module.exports = router;

