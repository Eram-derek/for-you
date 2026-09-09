import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import "./Celebration.css";

function Celebration({ onNext }) {
  useEffect(() => {
    // Page open howar shathe shathe confetti fire hobe
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#ff6b9d", "#c9184a", "#ffb3c6", "#a2d2ff", "#ffd6ff"],
    });
  }, []);

  return (
    <div className="celebration-overlay">
      <motion.div
        className="celebration-card"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="celebration-icon">🎉</div>

        <h2 className="celebration-title">
          WAIT YOU ACTUALLY SAID YES?? 😭
        </h2>

        <p className="celebration-subtext">
          I was so ready for you to say no 🥹
        </p>

        <button className="continue-btn" onClick={onNext}>
          okay okay! →
        </button>
      </motion.div>
    </div>
  );
}

export default Celebration;