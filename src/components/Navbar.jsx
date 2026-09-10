import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBell, FaEnvelopeOpenText } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [showNotifPopup, setShowNotifPopup] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [hasNewNotif, setHasNewNotif] = useState(true);

  const handleBellClick = () => {
    setShowNotifPopup((prev) => !prev);
    setHasNewNotif(false);
  };

  const handleLetterClick = () => {
    setShowNotifPopup(false);
    setShowLetter(true);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">Don't Cry</div>

        <div className="navbar-right">
          <div className="bell-wrapper" onClick={handleBellClick}>
            <FaBell size={20} color="#d6336c" />
            {hasNewNotif && <span className="notif-dot"></span>}
          </div>

          <AnimatePresence>
            {showNotifPopup && (
              <motion.div
                className="notif-dropdown"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="notif-item" onClick={handleLetterClick}>
                  <FaEnvelopeOpenText color="#d6336c" />
                  <span>You got a Letter from someone 💌</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {showLetter && (
          <div
            className="letter-overlay"
            onClick={() => setShowLetter(false)}
          >
            <motion.div
              className="letter-card"
              initial={{ scale: 0.7, opacity: 0, rotate: -3 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="letter-icon">💌</div>
              <h3 className="letter-title">A little letter for you</h3>
              <p className="letter-message">
               When i was in LFE, i noticed that you got a great smile so keep smiling 🌸
              </p>
              <button
                className="letter-close-btn"
                onClick={() => setShowLetter(false)}
              >
                close ♥
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
