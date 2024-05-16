
const express = require('express');
const mysql = require('mysql2');
const app = express();

app.get('/students', (req, res) => {
  // เชื่อมต่อกับฐานข้อมูล
 const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'student_database',
 });

 // เปิด connection ไปที่ database
 connection.connect();

 connection.query('SELECT * from students WHERE id = 3', (err, rows, fields) => {
   if (err) throw err;

   // return response กลับไปหา client โดยแปลง record เป็น json array
   res.json(rows);
 });

 // ปิด connection
 connection.end();
});

app.listen(3000, () => {
 console.log('server started on port 3000!');
});

