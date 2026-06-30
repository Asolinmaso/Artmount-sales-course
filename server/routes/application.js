const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// @route   POST /api/applications
// @desc    Submit a new course application
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, contact, email, location, message } = req.body;

    // Simple validation
    if (!name || !contact || !email || !location) {
      return res.status(400).json({ error: 'Please provide name, contact, email, and location' });
    }

    const newApplication = new Application({
      name,
      contact,
      email,
      location,
      message
    });

    const savedApplication = await newApplication.save();
    res.status(201).json({ success: true, data: savedApplication });
  } catch (err) {
    console.error('Error saving application:', err.message);
    res.status(500).json({ error: 'Server Error. Please try again later.' });
  }
});

// @route   GET /api/applications
// @desc    Retrieve all applications (for debugging/admin purposes)
// @access  Public (For simplicity, can be secured later)
router.get('/', async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.json({ success: true, count: applications.length, data: applications });
  } catch (err) {
    console.error('Error fetching applications:', err.message);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
