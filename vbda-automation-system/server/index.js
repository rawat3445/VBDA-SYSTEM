require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const advisorRoutes = require('./routes/advisorRoutes');
const clientRoutes = require('./routes/clientRoutes');
const emailRoutes = require('./routes/emailRoutes');
const cors = require("cors");


const app = express(); // ✅ This must come first!

const PORT = 5000;

app.use(cors());


app.use(express.json());

app.use("/api/clients", clientRoutes);
app.use("/api/advisors", advisorRoutes);
app.use('/api/email', emailRoutes); // ✅ Now it's safe to use

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
