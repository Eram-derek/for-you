import { motion } from "framer-motion";
import "./FinalPage.css";

function FinalPage() {
  return (
    <div className="final-overlay">
      <motion.div
        className="final-card"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="final-icon">🎬💕</div>
        <h2 className="final-title">It's a date!</h2>
        <p className="final-subtext">
          Can't wait to watch that movie with you. See you soon! 🌸
        </p>
      </motion.div>
    </div>
  );
}

export default FinalPage;
