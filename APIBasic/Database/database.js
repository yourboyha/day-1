const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// การตั้งค่าการเชื่อมต่อกับฐานข้อมูล
const dbConn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'student_database'
});

// Route สำหรับให้บริการไฟล์ student.html
app.get('/students', (req, res) => {
    res.sendFile(path.join(__dirname, 'student.html'));
});

// Route สำหรับการรับข้อมูล POST และบันทึกลงฐานข้อมูล
app.post('/students', async (req, res) => {
    try {
        const { name, age, phone, email } = req.body;
        const connection = await dbConn.getConnection();
        
        const [rows] = await connection.query(
            "INSERT INTO students (name, age, phone, email) VALUES (?, ?, ?, ?)", 
            [name, age, phone, email]
        );
        
        connection.release();
        res.status(201).json({ message: 'Student added successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error adding student' });
    }
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
