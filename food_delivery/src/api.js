// api.js
import axios from 'axios';

//const API_URL = "http://localhost:5000/api";  // Replace with your actual backend URL
const API_URL = "https://project1-5-444z.onrender.com"

// Register a new user
export const registerUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      email,
      password,
    });
    return response.data; // Success response from backend
  } catch (error) {
    throw error.response.data; // Error response from backend
  }
};

// Login user
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    return response.data; // Login success, returns token
  } catch (error) {
    throw error.response.data; // Login error
  }
};

// Get menu items
export const getMenuItems = async () => {
  try {
    const response = await axios.get(`${API_URL}/menu`);
    return response.data; // Returns the list of menu items
  } catch (error) {
    throw error.response.data; // Error getting menu items
  }
};


