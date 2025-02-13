const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:5173", methods: ["POST", "GET"], credentials: true }));
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "",
    database: "reactngo", // Use the database you created
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL");
});

// API Endpoint for Contact Form
app.post("/submit-contact", (req, res) => {
    const { name, age, occupation, mobile_no, email, message } = req.body;
    const query = "INSERT INTO contacts (name, age, occupation, mobile_no, email, message) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(query, [name, age, occupation, mobile_no, email, message], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).send("Contact form submitted successfully!");
    });
});

// API Endpoint for SponsorForm (Sponsor a Child)
app.post("/submit-sponsor-child", (req, res) => {
    console.log(req.body);
    const { name, gender, age, amount, message } = req.body;
    const query = "INSERT INTO sponsors_child (name, gender, age, amount, message) VALUES (?, ?, ?, ?, ?)";
    db.query(query, [name, gender, age, amount, message], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).send("Sponsor form for a child submitted successfully!");
    });
});

// API Endpoint for SponsorForm2 (Sponsor an Elderly)
app.post("/submit-sponsor-elderly", (req, res) => {
    const { name, gender, age, amount, message } = req.body;
    const query = "INSERT INTO sponsors_elderly (name, gender, age, amount, message) VALUES (?, ?, ?, ?, ?)";
    db.query(query, [name, gender, age, amount, message], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).send("Sponsor form for an elderly person submitted successfully!");
    });
});

// API Endpoint for Donations
app.post("/submit-donation", (req, res) => {
    const { name, email, visitDate, partyWithThem, partyDetails, selectedItems } = req.body;

    if (!name || !email || !visitDate || !selectedItems || selectedItems.length === 0) {
        return res.status(400).send("All fields are required!");
    }

    const donationQuery = "INSERT INTO donations (name, email, visit_date, party_with_them, party_details) VALUES (?, ?, ?, ?, ?)";
    db.query(donationQuery, [name, email, visitDate, partyWithThem, partyDetails], (err, result) => {
        if (err) return res.status(500).send(err);

        const donationId = result.insertId;
        const itemQuery = "INSERT INTO donated_items (donation_id, item_name, quantity) VALUES ?";
        const itemValues = selectedItems.map(item => [donationId, item.name, item.quantity]);

        db.query(itemQuery, [itemValues], (err) => {
            if (err) return res.status(500).send(err);
            res.status(200).send("Donation recorded successfully!");
        });
    });
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
