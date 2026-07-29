const Prompt = require("../models/Prompt");

// GET
exports.getPrompts = async (req, res) => {
  try {
    const prompts = await Prompt.find();
    res.json(prompts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST
exports.createPrompt = async (req, res) => {
  try {
    const prompt = await Prompt.create(req.body);
    res.status(201).json(prompt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT
exports.updatePrompt = async (req, res) => {
  try {
    const prompt = await Prompt.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(prompt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deletePrompt = async (req, res) => {
  try {
    await Prompt.findByIdAndDelete(req.params.id);

    res.json({
      message: "Prompt Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};