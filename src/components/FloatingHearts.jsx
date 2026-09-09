import { useMemo } from "react";
import { motion } from "framer-motion";
import "./FloatingHearts.css";

const emojis = ["💕", "💖", "🌸", "✨", "💗"];

function FloatingHearts({ count = 18 }) {
  // useMemo diye random values ekbar generate hobe, re-render e change hobe na
  const hearts = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: Math.random() * 100, // vw %
      size: Math.random() * 16 + 14, // 14px - 30px
      duration: Math.random() * 10 + 12, // 12s - 22s
      delay: Math.random() * 10, // 0s - 10s
    }));
  }, [count]);

  return (
    <div className="floating-hearts-container">
      {hearts.map((heart) => (
        <motion.span
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}vw`,
            fontSize: `${heart.size}px`,
          }}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {heart.emoji}
        </motion.span>
      ))}
    </div>
  );
}

export default FloatingHearts;
