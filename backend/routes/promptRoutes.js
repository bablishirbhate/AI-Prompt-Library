const express = require("express");
const router = express.Router();

const {
  getPrompts,
  createPrompt,
  updatePrompt,
  deletePrompt,
} = require("../controllers/promptController");

router.get("/", getPrompts);
router.post("/", createPrompt);
router.put("/:id", updatePrompt);
router.delete("/:id", deletePrompt);

module.exports = router;