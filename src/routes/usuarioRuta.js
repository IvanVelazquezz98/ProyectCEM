const { Router } = require("express");
const { getAllUsers } = require("../controllers/Users/getAllUsers");
const { createUser } = require("../controllers/Users/createUser");
const { updateUser } = require("../controllers/Users/updateUser");
const { loginUser } = require("../controllers/Users/loginUser");
const { getUserByEmail } = require("../controllers/Users/getUserByEmail");

const router = Router();
//para que este mas ordenadito y no esten todas las funciones aca las pase en controllers
router.get("/", getAllUsers);
router.get("/:email" , getUserByEmail)
router.post("/register", createUser);
router.patch("/update", updateUser);
router.post("/login", loginUser);

module.exports = router;