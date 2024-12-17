const MenuItem = require("../models/MenuItem");

const getMenuItems = async (req, res) => {
  const menu = await MenuItem.find();
  res.status(200).json(menu);
};

const addMenuItem = async (req, res) => {
  try {
    const { name, price, category, image } = req.body;
    const newItem = new MenuItem({ name, price, category, image });
    await newItem.save();
    res.status(201).json({ message: "Menu item added successfully" });
  } catch (error) {
    res.status(400).json({ error: "Failed to add menu item" });
  }
};

module.exports = { getMenuItems, addMenuItem };
