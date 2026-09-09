import { useState } from "react";
import { motion } from "framer-motion";
import "./FoodChoice.css";

const foodOptions = [
  { name: "Pizza", emoji: "🍕" },
  { name: "Sushi", emoji: "🍣" },
  { name: "Burgers", emoji: "🍔" },
  { name: "Pasta", emoji: "🍝" },
  { name: "Tacos", emoji: "🌮" },
  { name: "Ramen", emoji: "🍜" },
];

function FoodChoice({ onNext }) {
  const [selected, setSelected] = useState(null);

  const handleSubmit = () => {
    if (!selected) {
      alert("Pick something na, please! 🥺");
      return;
    }
    onNext(selected);
  };

  return (
    <div className="food-overlay">
      <motion.div
        className="food-card"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="food-title">What are we feeling? 🍽️✨</h2>
        <p className="food-subtitle">pick your vibe</p>

        <div className="food-grid">
          {foodOptions.map((item) => (
            <motion.div
              key={item.name}
              className={`food-item ${
                selected === item.name ? "food-selected" : ""
              }`}
              onClick={() => setSelected(item.name)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="food-emoji">{item.emoji}</div>
              <div className="food-name">{item.name}</div>
            </motion.div>
          ))}
        </div>

        <button className="food-next-btn" onClick={handleSubmit}>
          continue →
        </button>
      </motion.div>
    </div>
  );
}

export default FoodChoice;