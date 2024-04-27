const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
const port = 8081;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Add your MySQL password here
  database: "signup",
});

// connection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to MySQL database: " + err.stack);
//     return;
//   }
//   console.log("Connected to MySQL database as id " + connection.threadId);
// });

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

app.post("/newsletter", (req, res) => {
  const sql = "INSERT INTO newsletter (`name`,`email`) VALUES (?,?)";
  const fData = [req.body.name, req.body.email];

  db.query(sql, fData, (err, data) => {
    if (err) {
      return res.json({ error: err });
    }
    return res.json(data);
  });
});

// app.post("/checkout", (req,res)=> {
//   const sql = "INSERT INTO checkout (`cName`,`address`,`apartment`,`city`,`state`,`pCode`) VALUES(?,?,?,?,?,?)";
//   const checkoutFormData = [
//     req.body.cName,
//     req.body.address,
//     req.body.apartment,
//     req.body.city,
//     req.body.state,
//     req.body.pCode,

//   ];

//   db.query(sql, checkoutFormData, (err, data) => {
//     if (err) {
//       return res.json({ error: err });
//     }
//     return res.json(data);
//   });

// });

app.post("/orders", (req, res) => {
  const {
    cName,
    address,
    apartment,
    city,
    state,
    pCode,
    items,
    cartTotal,
    quantityOfUniqueItems,
  } = req.body;

  // Insert data into the orders table
  const sql = `INSERT INTO orders (customer_name, address, apartment, city, state, postal_code, item_name, item_price, cart_total, quantity_of_unique_items) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const checkoutFormData = [
    cName,
    address,
    apartment,
    city,
    state,
    pCode,
    items.map((item) => item.name).join(", "),
    items.map((item) => item.price).join(", "),
    cartTotal,
    quantityOfUniqueItems,
  ];

  db.query(sql, checkoutFormData, (err, data) => {
    if (err) {
      return res.json({ error: err });
    }
    return res.json(data);
  });

  //   db.query(sql, values, (err, result) => {
  //     if (err) {
  //       console.error("Error inserting data into MySQL table: " + err.stack);
  //       res.status(500).send("Internal server error");
  //       return;
  //     }
  //     console.log("Data inserted into MySQL table successfully");
  //     res.status(200).send("Data inserted into MySQL table successfully");
  //   });
});

app.listen(8081, () => {
  console.log("Listening on port 8081");
});
