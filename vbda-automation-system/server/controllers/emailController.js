const sgMail = require("@sendgrid/mail");
require('dotenv').config(); // put this at top of your main backend file (like index.js)

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const generateInvitationEmail = async (req, res) => {
  const { name, email, organization, role } = req.body; 

  if (!name || !email || !organization || !role) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const msg = {
    to: email,
    from: "l40090918@gmail.com",
    templateId: "d-66f52ca342c0426c9c1d083ae557601b",
    dynamicTemplateData: {
      name,
      organization,
      role,
      eventName: "VBDA 2025",
      eventDate: "June 15, 2025"
    }
  };

  try {
    console.log("🔄 Sending email with this data:", msg);
    const response = await sgMail.send(msg);
    console.log("✅ SendGrid response:", response);
    
    res.status(200).json({ message: "Email sent successfully", to: email });
  } catch (error) {
    console.error("❌ SendGrid error:", error.response?.body || error.message);
    res.status(500).json({ message: "Failed to send email", error });
  }
};
module.exports = { generateInvitationEmail };