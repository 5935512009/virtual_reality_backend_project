const fs = require("fs");
const path = require("path");

exports.getAllOrder = (req, res) => {
    try {
        // อ่านไฟล์ JSON
        const userFile = fs.readFileSync(path.join(__dirname, "../models/user.json"), "utf8");
        const walletFile = fs.readFileSync(path.join(__dirname, "../models/wallet.json"), "utf8"); // **แก้จาก Wallet เป็น wallet**
        const orderFile = fs.readFileSync(path.join(__dirname, "../models/order.json"), "utf8"); // **แก้จาก Order เป็น order**

        // แปลง JSON เป็น Object
        const users = JSON.parse(userFile);
        const wallets = JSON.parse(walletFile);
        const orders = JSON.parse(orderFile);

        // รวมข้อมูล
        const mergeData = users.map(user => {
            const userWallet = wallets.find(wallet => wallet.user_id === user.user_id);

            // ถ้ามี userWallet ให้หา order ที่ตรงกัน
            const userOrders = userWallet
                ? orders.filter(order => order.wallet_id === userWallet.wallet_id)
                : [];

            return {
                ...user,
                wallet: userWallet || null,
                orders: userOrders.length > 0 ? userOrders : null // ถ้าไม่มี order ให้เป็น null
            };
        });

        res.status(200).json(mergeData);
    } catch (error) {
        res.status(500).json({ message: "Error reading orderController file", error });
    }
};
