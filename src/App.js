import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import GameInfo from "./components/GameInfo";
import Creatures from "./components/Creatures";
import Trade from "./components/Trade";
import "./styles.css"; // Import các kiểu dáng CSS

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Menu />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game-info" element={<GameInfo />} />
            <Route path="/creatures" element={<Creatures />} />
            <Route path="/trade" element={<Trade />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
