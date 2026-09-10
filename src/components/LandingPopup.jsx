import { useState } from "react";
import { motion } from "framer-motion";
import "./LandingPopup.css";

function LandingPopup({ onYes }) {
  const [noPosition, setNoPosition] = useState({ top: null, left: null });
  const [noHoverCount, setNoHoverCount] = useState(0);

  // "No" button pala-pala korbe jekhane hover/click hobe
  // Mobile-safe range: 15% - 75% (screen er baire jabe na)
  const moveNoButton = () => {
    const randomTop = Math.random() * 60 + 15; // 15% - 75% of screen height
    const randomLeft = Math.random() * 60 + 15; // 15% - 75% of screen width
    setNoPosition({ top: `${randomTop}vh`, left: `${randomLeft}vw` });
    setNoHoverCount((prev) => prev + 1);
  };

  return (
    <div className="popup-overlay">
      <motion.div
        className="popup-card"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="avatar-circle">🐶</div>

        <h2 className="popup-question">
          🌸 Will you go to watch a movie with me? 🌸
        </h2>

        <div className="button-row">
          <button className="yes-btn" onClick={onYes}>
            YES ♥
          </button>

          <motion.button
            className="no-btn"
            style={
              noPosition.top
                ? {
                    position: "fixed",
                    top: noPosition.top,
                    left: noPosition.left,
                  }
                : {}
            }
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.3 }}
          >
            {noHoverCount > 5 ? "please 🥺" : "NO"}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default LandingPopup;
