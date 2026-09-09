import { useState } from "react";
import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";
import FloatingHearts from "./components/FloatingHearts";
import LandingPopup from "./components/LandingPopup";
import Celebration from "./components/Celebration";
import DateTimePicker from "./components/DateTimePicker";
import FoodChoice from "./components/FoodChoice";
import FakePayment from "./components/FakePayment";
import FinalPage from "./components/FinalPage";
import "./App.css";

function App() {
  const [step, setStep] = useState("landing");
  const [dateInfo, setDateInfo] = useState(null);
  const [foodChoice, setFoodChoice] = useState(null);

  const handleYes = () => setStep("celebration");
  const handleCelebrationNext = () => setStep("calendar");

  const handleDateNext = (info) => {
    setDateInfo(info);
    setStep("food");
  };

  const handleFoodNext = (food) => {
    setFoodChoice(food);
    setStep("payment");
  };

  const handlePaymentComplete = () => setStep("done");

  return (
    <div className="app-container">
      <FloatingHearts />
      <Navbar />
      <MusicPlayer />

      {step === "landing" && <LandingPopup onYes={handleYes} />}

      {step === "celebration" && (
        <Celebration onNext={handleCelebrationNext} />
      )}

      {step === "calendar" && <DateTimePicker onNext={handleDateNext} />}

      {step === "food" && <FoodChoice onNext={handleFoodNext} />}

      {step === "payment" && (
        <FakePayment onComplete={handlePaymentComplete} />
      )}

      {step === "done" && <FinalPage />}
    </div>
  );
}

export default App;
