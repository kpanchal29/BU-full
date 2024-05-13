const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");
const crypto = require("crypto");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define a global variable to store the items in the cart
let cartItems = [];

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/order", async (req, res) => {
  try {
    const { amount, currency, receipt } = req.body;

    if (!amount || !currency || !receipt) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount,
      currency,
      receipt,
    };

    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(400).json({ error: "Failed to create order" });
    }

    // Store the cart items in the global variable
    cartItems = req.body.cartItems;

    res.json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/validate", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);

    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);

    const digest = hmac.digest("hex");

    if (digest !== razorpay_signature) {
      return res.status(400).json({ error: "Transaction is not legitimate" });
    }

    // Clear the cart after successful payment
    cartItems = [];

    res.json({
      message: "Transaction is legitimate",
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
    });
  } catch (error) {
    console.error("Error validating payment:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
