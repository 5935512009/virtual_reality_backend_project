const express = require("express");
const test = require("./routes/test");
const userRoute = require("./routes/userRoutes");
const walletRoute = require("./routes/walletRoutes");
const orderRoute = require("./routes/orderRoutes");
const app = express();

app.use(express.json());


// routes
app.get('/test', async(req,res)=>{
    res.json("hello world")
})

//routes api
app.use('/api',test);
app.use('/api/users',userRoute);
app.use('/api/wallets',walletRoute);
app.use('/api/order',orderRoute);

const PORT = 4001;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})