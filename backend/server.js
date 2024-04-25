const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Add your MySQL password here
  database: "signup",
});

// Route for user signup
app.post("/signup", (req, res) => {
  const sql =
    "INSERT INTO login (`userName`, `firstName`, `lastName`, `email`, `phone`, `password`) VALUES (?, ?, ?, ?, ?, ?)";
  const formData = [
    req.body.userName,
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.phone,
    req.body.password,
  ];

  db.query(sql, formData, (err, data) => {
    if (err) {
      return res.json({ error: err });
    }
    return res.json(data);
  });
});

// Route for user login
app.post("/login", (req, res) => {
  const { userName, password } = req.body;
  const sql = "SELECT * FROM login WHERE userName = ? AND password = ?";
  db.query(sql, [userName, password], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ success: false, message: "Error logging in" });
    } else if (result.length === 0) {
      res
        .status(401)
        .send({ success: false, message: "Invalid username or password" });
    } else {
      res.status(200).send({ success: true, message: "Login successful" });
    }
  });
});

// Route for handling contact form submissions
app.post("/contactus", (req, res) => {
  const sql =
    "INSERT INTO contactus (`firstname`,`lastname`,`email`,`message`) VALUES (?,?,?,?)";
  const contactFormData = [
    req.body.firstname,
    req.body.lastname,
    req.body.email,
    req.body.message,
  ];

  db.query(sql, contactFormData, (err, data) => {
    if (err) {
      return res.json({ error: err });
    }
    return res.json(data);
  });
});

app.post("/newsletter", (req,res) => {
  const sql = 
      "INSERT INTO newsletter (`name`,`email`) VALUES (?,?)";
  const fData = [
    req.body.name,
    req.body.email,
  ];

  db.query(sql, fData, (err, data) => {
    if (err) {
      return res.json({ error: err });
    }
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("Listening on port 8081");
});
