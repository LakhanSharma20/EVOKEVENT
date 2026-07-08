const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server chal raha hai 🚀");
});

app.post("/book", (req, res) => {
    console.log("Booking Data:", req.body);
    res.send("Booking received");
});

app.listen(5000, () => {
    console.log("Server started on http://localhost:5000");
});