const Example = require('../models/Example');

// @desc    Get all examples
// @route   GET /api/examples
// @access  Public
exports.getExamples = async (req, res) => {
  try {
    const examples = await Example.find();
    res.json(examples);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create a new example
// @route   POST /api/examples
// @access  Public
exports.createExample = async (req, res) => {
  const newExample = new Example(req.body);
  try {
    const savedExample = await newExample.save();
    res.status(201).json(savedExample);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
