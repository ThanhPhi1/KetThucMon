import React, { useState } from "react";

export const Home = () => {
  return (
    <div className="home-container">
      <h2>Trang chủ</h2>
      <p>Chào mừng bạn đến với trang chủ của chúng tôi!</p>
      <p>Khám phá những tính năng mới và thú vị của trò chơi!</p>

      {/* Ảnh chiều dài toàn màn hình với chữ ở trên */}
      <div className="full-screen-image">
        <div className="image-overlay">
          <h3></h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
