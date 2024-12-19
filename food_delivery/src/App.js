import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Main from "./Components/Main";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]); // Store registered users
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/main" /> : <Login setAuth={setIsAuthenticated} users={users} />}
        />
        <Route path="/register" element={<Register setUsers={setUsers} />} />
        <Route
          path="/main"
          element={isAuthenticated ? <Main /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
