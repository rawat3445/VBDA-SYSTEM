const Advisor = require("../models/Advisor");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginAdvisor = async (req, res) => {
  const { email, password } = req.body;

  try {
    const advisor = await Advisor.findOne({ email });
    if (!advisor) return res.status(404).json({ message: "Advisor not found" });

    const isMatch = await bcrypt.compare(password, advisor.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: advisor._id }, "your_jwt_secret", { expiresIn: "1d" });

    res.status(200).json({
      id: advisor._id,
      name: advisor.name,
      email: advisor.email,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  loginAdvisor,
};
