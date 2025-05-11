const express = require("express");
const router = express.Router();

const { loginAdvisor } = require("../controllers/advisorController");
const Advisor = require("../models/Advisor"); // <-- Also required for create-test route

// Test route to create advisor
router.post("/create-test", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newAdvisor = new Advisor({ name, email, password });
    await newAdvisor.save();

    res.status(201).json({ message: "Test advisor created", advisor: newAdvisor });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Existing login route
router.post("/login", loginAdvisor);

module.exports = router;
