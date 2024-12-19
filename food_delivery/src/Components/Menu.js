import React from "react";

const Menu = ({ addToCart }) => {
  const menuItems = [
    // Starters
    {
      name: "Spring Rolls",
      price: 280,
      category: "Starters",
      image: "/images/springroll.jpg",
    },
    {
      name: "Garlic Bread",
      price: 366,
      category: "Starters",
      image: "/images/garlicbread.jpg",
    },
    {
      name: "Veg crispy",
      price:190,
      category: "Starters",
      image: "/images/vegcrispy.jpg",
    },
    {
      name: "Masala pappad",
      price: 70,
      category: "Starters",
      image: "/images/masalapapad.jpg",
    },

    // Main Course
    {
      name: "Grilled Chicken",
      price: 450,
      category: "Main Course",
      image: "/images/grillchicken.jpg",
    },
    {
      name: "Vegetarian Pizza",
      price: 500,
      category: "Main Course",
      image: "/images/pizza.jpg",
    },
    {
      name: "Panner Tikka Massala",
      price: 360,
      category: "Main Course",
      image: "/images/pannertikkamasala.jpg",
    },
    {
      name: "Panner Kofta",
      price: 300,
      category: "Main Course",
      image: "/images/paneerkofta.jpg",
    },

    // Desserts
    {
      name: "Chocolate Lava Cake",
      price: 290,
      category: "Desserts",
      image: "/images/cake.jpg",
    },
    {
      name: "Ice Cream Sundae",
      price: 270,
      category: "Desserts",
      image: "/images/icecream.jpg",
    },
    {
      name: "Tiramisu",
      price: 320,
      category: "Desserts",
      image: "/images/tiramisu.jpg",
    },
    {
      name: "Cheesecake",
      price: 300,
      category: "Desserts",
      image: "/images/cheesecake.jpg",
    },
  ];

  const categories = [...new Set(menuItems.map((item) => item.category))];

  return (
    <section id="menu">
      <h2>Our Menu</h2>
      {categories.map((category) => (
        <div key={category} className="menu-category">
          <h3>{category}</h3>
          <div className="card-deck">
            {menuItems
              .filter((item) => item.category === category)
              .map((item, index) => (
                <div className="card" key={index}>
                  <img src={item.image} alt={item.name} className="card-img-top" />
                  <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">
                      Price: <strong>Rs.{item.price}</strong>
                    </p>
                    <button className="btn" onClick={() => addToCart(item)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Menu;