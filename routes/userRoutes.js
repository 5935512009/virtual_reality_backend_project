const express = require("express");
const {getAllUsersFromFile} = require("../controllers/userController")

const router = express.Router();

// path from controllers folder
router.get("/users-file",getAllUsersFromFile);

module.exports = router;