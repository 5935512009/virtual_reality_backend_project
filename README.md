

# Getting Started 


## Available Scripts

In the project directory, you can run:

## ขั้นตอนการเริ่ม project
1. ใช้คำสั่ง  " git clone https://github.com/5935512009/virtual_reality_backend_project.git" เพิ่มโหลดโปรเจคเข้ามาในเครื่อง
2. เข้าโปรเจคผ่านทาง VSCode หลังจากนั้นเปิด Terminal ใช้คำสั่ง "npm install" เพื่อทำการติดตั้ง library เสริมที่เกี่ยวกับกับโปรเจค (สามารถดู library เสรืมได้ที่ไฟล์ package.json)
3. หลังจากติดตั้งเรียบร้อยให้ใช้คำสั่ง " npm start " เพื่อทำการเริ่มโปรเจคโดยสามารถเข้าผ่านทาง http://localhost:4001 บนเว็บบราวเซอร์ได้เลย
4. ER Diagram สามารถเปิดดูได้ที่ไฟล์รูปภาพชื่อ image ER diagream.drawio.png
***วิธิการเข้าถึงข้อมูล** 
เราจะใช้ path ในการแสดงผมข้อมูลออกมา ตัวอย่างการเข้าถึงข้อมูล

ข้อมูลจากไฟล์ user.json ,wallet.json และ order.json ที่ข้อมูล join กัน
http://localhost:4001/api/order/order-user

ข้อมูลจากไฟล์ user.json กับ wallet.json ที่ข้อมูล join กัน
http://localhost:4001/api/wallets/wallet-user

ข้อมูลจากไฟล์ user.json 
http://localhost:4001/api/users/users-file

### `npm start`
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### Main check list
1. เขียน Method ใน Model เพื่อดึงข้อมูลของ Model อื่นๆที่ความสัมพันธ์กัน         
2. เขียน Controller และ Routing ในส่วนหลักๆของระบบ ไม่จำเป็นต้องทำทั้งหมด  
3. สร้างไฟล์สำหรับ Seed ข้อมูล เพื่อใช้ในการทดสอบ                          

### check list project
1. Create ER diagram.                   [completed]
2. Install backend library.             [completed]
3. Create index.js main file.           [completed]
4. Create routes and model.             [completed]
5. Route file.                          [completed]
6. Create example file or use database. [completed]
7. test file example.                   [completed]
