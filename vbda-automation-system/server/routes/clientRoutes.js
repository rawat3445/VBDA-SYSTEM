const express = require("express");
const router = express.Router();

const {
  createClient,
  getClientsByAdvisor,
  updateClient,
  deleteClient,
} = require("../controllers/clientController");


router.post("/create", createClient);
router.get("/:advisorId", getClientsByAdvisor);
router.put("/:clientId", updateClient);
router.delete("/:clientId", deleteClient);

module.exports = router;
