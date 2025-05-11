const Client = require("../models/Client");

// Create a new client
const createClient = async (req, res) => {
  const { name, email, phone, advisorId } = req.body;

  try {
    const newClient = new Client({ name, email, phone, advisorId });
    await newClient.save();
    res.status(201).json({ message: "Client created", client: newClient });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all clients for an advisor
const getClientsByAdvisor = async (req, res) => {
  const { advisorId } = req.params;

  try {
    const clients = await Client.find({ advisorId });
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update client
const updateClient = async (req, res) => {
  const { clientId } = req.params;

  try {
    const updated = await Client.findByIdAndUpdate(clientId, req.body, { new: true });
    res.status(200).json({ message: "Client updated", client: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete client
const deleteClient = async (req, res) => {
  const { clientId } = req.params;

  try {
    await Client.findByIdAndDelete(clientId);
    res.status(200).json({ message: "Client deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createClient,
  getClientsByAdvisor,
  updateClient,
  deleteClient,
};
