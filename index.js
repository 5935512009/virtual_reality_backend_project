const express = require("express");
const test = require("./routes/test");
const app = express();

app.use(express.json());


// routes
app.get('/test', async(req,res)=>{
    res.json("hello world")
})

//routes api
app.use('/api',test)

const PORT = 4001;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})