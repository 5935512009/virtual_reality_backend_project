const express = require("express");
const {getAllUserAndWallet} = require("../controllers/walletController");

const router = express.Router();

router.get("/wallet-test", async(req,res)=>{
    res.json("wallet path ready exits.")
});

//path from controllers folder
router.get("/wallet-user",getAllUserAndWallet);

module.exports = router;