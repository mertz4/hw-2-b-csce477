const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    // Server-side validation
    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required."
        });
    }

    // Reject suspicious SQL-related input
    const sqlPattern =
        /('|--|;|\bOR\b|\bUNION\b|\bSELECT\b|\bDROP\b|\bINSERT\b|\bDELETE\b)/i;

    if (sqlPattern.test(email) || sqlPattern.test(password)) {
        return res.status(400).json({
            message: "Invalid input detected."
        });
    }

    if (!email.includes("@")) {
        return res.status(400).json({
            message: "Email must contain @."
        });
    }

    if (password.length < 8) {
        return res.status(400).json({
            message: "Password must be at least 8 characters."
        });
    }

    return res.status(200).json({
        message: `Welcome back! You logged in as: ${email}`
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});