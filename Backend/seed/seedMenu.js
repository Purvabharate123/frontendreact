const mongoose = require("../config/db");
const MenuItem = require("../models/MenuItem");

const menuItems = [
  { name: "Spring Rolls", price: 280, category: "Starters", image: "/images/springroll.jpg" },
  { name: "Fried Rice", price: 200, category: "Main Course", image: "/images/friedrice.jpg" },
  { name: "Ice Cream", price: 120, category: "Desserts", image: "/images/icecream.jpg" },
];

MenuItem.insertMany(menuItems)
  .then(() => console.log("Menu items seeded"))
  .finally(() => mongoose.connection.close());
