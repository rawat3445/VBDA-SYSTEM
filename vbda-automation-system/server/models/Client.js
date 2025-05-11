const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: String,
  advisorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Advisor' }
});

module.exports = mongoose.model('Client', clientSchema);
