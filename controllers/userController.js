const fs = require("fs"); // manage file (read, write, delete,create) file
const path = require("path"); //manage about path

// read file .json
exports.getAllUsersFromFile = (req,res)=>{
    try{
        const filePath = path.join(__dirname,"../models/user.json");  //__dirname ตัวแปรพิเศษ จอง node.js ใช้เก็บ directory ที่ folder นั้นอยู่ 
        const data = fs.readFileSync(filePath,"utf8"); // read file;
        const users = JSON.parse(data); // change json to obj

        res.status(200).json(users);
    }catch(error){
        res.status(500).json({message:"Error reading file", error});
    }
};