import React, { useState } from "react";
import "./Creatures.css"; // Import tệp CSS để style cho các khung

// Dữ liệu sinh vật với phân loại Tier
const creaturesData = [
  {
    name: "broder",
    imageUrl:
      "https://tse4.mm.bing.net/th?id=OIP.YEUh1YfDkcEwaMWbHx6BcQHaFj&pid=Api&P=0&h=180",
    description: "",
    tier: 5,
  },
  {
    name: "Mijusuima",
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.uGNK56WW59c2FJn64KK3BgHaF_&pid=Api&P=0&h=180",
    description: "",
    tier: 5,
  },
  {
    name: "Sigmatox",
    imageUrl:
      "https://tse3.mm.bing.net/th?id=OIP.ARuZr25tHP6kP7YvyB4ztwHaDo&pid=Api&P=0&h=180",
    description: "",
    tier: 5,
  },
  {
    name: "kora",
    imageUrl:
      "https://tse4.mm.bing.net/th?id=OIP.8O8y_2QoSz7ygdSdEJeM1wAAAA&pid=Api&P=0&h=180v",
    description: "",
    tier: 5,
  },
  {
    name: "Arkmetta",
    imageUrl:
      "https://tse3.mm.bing.net/th?id=OIP.hIVgmhZaKRc5Jge9QER8DQHaEU&pid=Api&P=0&h=180",
    description: "A mythical griffin with the wings of an eagle.",
    tier: 4,
  },
  {
    name: "Sha'rai",
    imageUrl:
      "https://tse4.mm.bing.net/th?id=OIP.bY_nmgW6YWB8pLMtSd2CLQHaHa&pid=Api&P=0&h=180",
    description: "",
    tier: 2,
  },
  {
    name: "gradon",
    imageUrl:
      "https://tse3.mm.bing.net/th?id=OIP.OX0TEgZ0XWsQH18uE6AhoAHaER&pid=Api&P=0&h=180",
    description: "",
    tier: 3,
  },
  {
    name: "cá nóc",
    imageUrl:
      "https://tse1.mm.bing.net/th?id=OIP.FOvwRZECVNT4OzrL16wq3QHaIn&pid=Api&P=0&h=180",
    description: "A wolf that commands the power of thunder.",
    tier: 1,
  },
  {
    name: "Discuss",
    imageUrl:
      "https://tse3.mm.bing.net/th?id=OIP.uho0FlWR2GfWfr2dE2UQ2wHaFZ&pid=Api&P=0&h=180",
    description: "",
    tier: 1,
  },
  {
    name: "bass",
    imageUrl:
      "https://tiermaker.com/images/templates/creatures-of-sonaria-tier-list-8-26-22-1108603/11086031661643403.png",
    description: "",
    tier: 4,
  },
];

const Creatures = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Dùng để lưu giá trị tìm kiếm
  const [selectedTier, setSelectedTier] = useState(null); // Dùng để lọc theo tier

  // Hàm lọc sinh vật theo tên và tier
  const filteredCreatures = creaturesData.filter((creature) => {
    const matchesSearch = creature.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTier = selectedTier ? creature.tier === selectedTier : true;
    return matchesSearch && matchesTier;
  });

  return (
    <div className="creatures-container">
      <h2>Sinh Vật</h2>

      {/* Thanh tìm kiếm */}
      <input
        type="text"
        placeholder="Tìm kiếm sinh vật..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Chọn Tier để lọc */}
      <div className="tier-filter">
        <button onClick={() => setSelectedTier(1)}>Tier 1</button>
        <button onClick={() => setSelectedTier(2)}>Tier 2</button>
        <button onClick={() => setSelectedTier(3)}>Tier 3</button>
        <button onClick={() => setSelectedTier(4)}>Tier 4</button>
        <button onClick={() => setSelectedTier(5)}>Tier 5</button>
        <button onClick={() => setSelectedTier(null)}>Tất cả</button>
      </div>

      {/* Hiển thị các sinh vật */}
      <div className="creatures-grid">
        {filteredCreatures.map((creature, index) => (
          <div className="creature-card" key={index}>
            <img
              src={creature.imageUrl}
              alt={creature.name}
              className="creature-image"
            />
            <div className="creature-info">
              <h3>{creature.name}</h3>
              <p>{creature.description}</p>
              <span className="tier-label">Tier {creature.tier}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creatures;
