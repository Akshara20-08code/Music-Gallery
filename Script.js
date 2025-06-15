const express = require("express");
const app = express();
const mysql = require("mysql2");
const path = require("path");
app.use(express.static("public"));
app.use(express.json());
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "your_password",
database: "music_gallery",
});
db.connect((err) => {
if (err) throw err;
console.log(" Connected to MySQL");
});
app.get("/products", (req, res) => {
db.query("SELECT * FROM products", (err, results) => {
if (err) return res.status(500).json({ error: err });
res.json(results);
});
});
app.post("/checkout", (req, res) => {
const { cart } = req.body;
const values = cart.map(item => [item.name, item.price]);
db.query("INSERT INTO orders (item_name, item_price) VALUES ?", [values], (err) => {
if (err) return res.status(500).json({ error: err });
const total = cart.reduce((sum, item) => sum + item.price, 0);
res.json({ message: `Checkout successful! Total: $${total}` });
});
});
const PORT = 3000;
app.listen(PORT, () => {
console.log(` Server running at http://localhost:${PORT}`);
});
