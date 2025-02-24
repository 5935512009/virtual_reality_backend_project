const express = require("express");
const {getAllOrder} =require("../controllers/orderController")

const router = express.Router();

router.get("/order-test",async(req,res)=>{
    res.json("order path ready exits.");
});


//path from controller folder
router.get("/order-user",getAllOrder);
module.exports = router;