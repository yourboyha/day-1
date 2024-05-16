const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get("/", (req, res) => {
   //res.send("/index.html");
   res.sendFile(__dirname + '/index.html');
});

app.post("/", (req, res) => {
   var num1 = Number(req.body.num1);
   var num2 = Number(req.body.num2);
   var result = num1 + num2;
   res.send("The calculation result is : " + result);
});

app.get("/bmiCalculator", (req, res)=>{
   //res.send("Hello World");
   res.sendFile(__dirname + "/bmiCalculator.html")
} );
app.post("/bmiCalculator", (req,res)=>{
   console.log(req.body);
   var weight  = Number(req.body.weight);
   var height  = Number(req.body.height);
   var BMI = Math.round(weight/(height*height));
   var description = "";
   if (BMI <= 18.5) description = "ผอมเกินไป"
   else if (BMI < 23) description = "น้ำหนักปกติ เหมาะสม"
   else if (BMI < 25) description = "น้ำหนักเกิน"
   else if (BMI < 30) description = "อ้วน"
   else description = "อ้วนมาก"
   res.send("คุณมีค่า BMI = " + BMI + " , คุณอยู่ในเกณฑ์ = " + description);
});

app.get('/kanye', async (req, res) => {
  try {
      const url = 'https://api.kanye.rest/'; // Replace with the URL you want to fetch data from
      const response = await axios.get(url);
      res.json(response.data); // Send the fetched data as a response
  } catch (error) {
      res.status(500).send('Error fetching data');
  }
});

app.get('/java', async (req, res) => {
  try {
      const url = 'https://v2.jokeapi.dev/joke/Programming?contains=Java'; // Replace with the URL you want to fetch data from
      const response = await axios.get(url);
      res.json(response.data); // Send the fetched data as a response
  } catch (error) {
      res.status(500).send('Error fetching data');
  }
});




app.listen(3000, () => {
   console.log("Server is running on port 3000");
});