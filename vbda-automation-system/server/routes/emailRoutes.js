const express = require("express");
const router = express.Router();
const { generateInvitationEmail } = require("../controllers/emailController");

router.post("/generate", generateInvitationEmail);

module.exports = router;
