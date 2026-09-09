import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./FakePayment.css";

function FakePayment({ dateInfo, foodChoice, onComplete }) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [processing, setProcessing] = useState(false);

  const sendEmail = () => {
    const formattedDate = dateInfo?.date
      ? new Date(dateInfo.date).toLocaleDateString()
      : "Not specified";
    const formattedTime = dateInfo?.time || "Not specified";
    const formattedFood = foodChoice || "Not specified";

    emailjs
      .send(
        "service_abc1234",
        "template_h5bhwo7",
        {
          date: formattedDate,
          time: formattedTime,
          food: formattedFood,
        },
        "xVNbPlT_Yaf2qzLYt"
      )
      .then(() => {
        console.log("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Email failed to send:", error);
      });
  };

  const handlePay = () => {
    setProcessing(true);
    sendEmail(); // Email pathano hobe payment button click korার somoy
    setTimeout(() => {
      setProcessing(false);
      setShowSuccess(true);
    }, 1500);
  };

  return (
    <div className="payment-overlay">
      <motion.div
        className="payment-card"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait">
          {!showSuccess ? (
            <motion.div key="paymentform" exit={{ opacity: 0, scale: 0.9 }}>
              <div className="payment-icon">💳</div>
              <h2 className="payment-title">one small fee</h2>
              <p className="payment-subtext">
                to confirm your acceptance of this date, please complete
                the following transaction. totally normal. everyone does
                this.
              </p>

              <div className="agreement-box">
                <div className="agreement-left">
                  <span className="agreement-name">Date Agreement™</span>
                  <span className="agreement-note">
                    one-time fee • non-refundable • absolutely worth it
                  </span>
                </div>
                <div className="agreement-price">$499</div>
              </div>

              <button
                className="pay-btn"
                onClick={handlePay}
                disabled={processing}
              >
                {processing ? "processing... 💸" : "pay $499 & confirm 💝"}
              </button>

              <p
                className="go-back-text"
                onClick={() => setShowSuccess(true)}
              >
                go back
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="payment-success"
            >
              <div className="success-icon">💌</div>
              <h2 className="payment-title">gotcha! 😂</h2>
              <p className="payment-subtext">
                relax, that payment wasn't real. just wanted to see your
                face. our date is officially set!
              </p>
              <button className="pay-btn" onClick={onComplete}>
                see you there! →
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default FakePayment;
