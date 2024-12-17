// menuRoutes.js
const express = require('express');
const MenuItem = require('../models/MenuItem'); // Import MenuItem model

const router = express.Router();

// Route to fetch all menu items
router.get('/', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
});

// Route to add a new menu item
router.post('/', async (req, res) => {
  const { name, price, category, image } = req.body;

  if (!name || !price || !category || !image) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newMenuItem = new MenuItem({
    name,
    price,
    category,
    image,
  });

  try {
    const savedMenuItem = await newMenuItem.save();
    res.status(201).json(savedMenuItem); // Return the added item as a response
  } catch (error) {
    res.status(500).json({ error: 'Failed to add menu item' });
  }
});

module.exports = router;

