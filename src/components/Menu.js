import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link để điều hướng

const Menu = () => {
  const [showGameInfo, setShowGameInfo] = useState(false);
  const [showCreatures, setShowCreatures] = useState(false);

  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/" className="menu-item">
            Trang Chủ
          </Link>
        </li>
        <li
          onMouseEnter={() => setShowGameInfo(true)}
          onMouseLeave={() => setShowGameInfo(false)}
        >
          <Link to="/game-info" className="menu-item">
            Thông Tin Trò Chơi
          </Link>
          {showGameInfo && (
            <ul className="submenu">
              {/* Loại bỏ các submenu không cần thiết */}
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => setShowCreatures(true)}
          onMouseLeave={() => setShowCreatures(false)}
        >
          <Link to="/creatures" className="menu-item">
            Sinh Vật
          </Link>
          {showCreatures && (
            <ul className="submenu">
              {/* Loại bỏ các submenu không cần thiết */}
            </ul>
          )}
        </li>
        <li>
          <Link to="/trade" className="menu-item">
            Trap Đổi
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
