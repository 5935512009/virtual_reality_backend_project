const fs = require("fs");
const path = require("path");

exports.getAllUserAndWallet = (req, res) => {
    try {
        // อ่านไฟล์ JSON
        const userFile = fs.readFileSync(path.join(__dirname, "../models/user.json"), "utf8");
        const walletFile = fs.readFileSync(path.join(__dirname, "../models/wallet.json"), "utf8"); // **เปลี่ยน W เป็น w**

        // แปลง JSON เป็น Object
        const users = JSON.parse(userFile);
        const wallets = JSON.parse(walletFile); // **เปลี่ยน wallet เป็น wallets**
        // console.log(users)
        // รวมข้อมูลโดยใช้ user_id เป็นคีย์เชื่อม
        const mergedData = users.map(user => {
            const userWallet = wallets.find(wallet => wallet.user_id === user.user_id);

            //res.status(200).json(userWallet) // test wallet only
            return {
                ...user,
                wallet: userWallet || null  // ถ้าไม่มี wallet ให้เป็น null
            };
        });

        // ส่ง JSON Response
        res.status(200).json(mergedData);
    } catch (error) {
        res.status(500).json({ message: "Error reading walletController file", error });
    }
};
