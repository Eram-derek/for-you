import { useState } from "react";
import DatePicker from "react-datepicker";
import { motion } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";
import "./DateTimePicker.css";

const timeSlots = [
  "10:00 AM", "11:00 AM", "1:00 PM",
  "3:00 PM", "5:00 PM", "7:00 PM", "9:00 PM",
];

function DateTimePicker({ onNext }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  const handleSubmit = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select a day and time first! 🥺");
      return;
    }
    onNext({ date: selectedDate, time: selectedTime });
  };

  return (
    <div className="datetime-overlay">
      <motion.div
        className="datetime-card"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="datetime-icon">📅🐾</div>
        <h2 className="datetime-title">So... when are you free?</h2>

        <label className="datetime-label">Pick a Day 📆</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          minDate={new Date()}
          placeholderText="dd/mm/yyyy"
          dateFormat="dd/MM/yyyy"
          className="date-input"
        />

        <label className="datetime-label">What Time? ⏰</label>
        <select
          className="time-select"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option value="">Select a time...</option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>

        <button className="set-date-btn" onClick={handleSubmit}>
          set the date! ♥
        </button>
      </motion.div>
    </div>
  );
}

export default DateTimePicker;