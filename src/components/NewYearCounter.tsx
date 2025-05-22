import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import JSConfetti from "js-confetti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons/faGift";
import { faSleigh } from "@fortawesome/free-solid-svg-icons/faSleigh";
import { faCandyCane } from "@fortawesome/free-solid-svg-icons/faCandyCane";
import { faTree } from "@fortawesome/free-solid-svg-icons/faTree";

const NewYearCounter = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date();
      const newYear = new Date(currentDate.getFullYear() + 1, 0, 1);
      const difference = newYear.getTime() - currentDate.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleConfetti = () => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      emojis: ["🎄", "🎅", "🎁", "⭐"],
      emojiSize: 50,
      confettiNumber: 100,
    });
  };

  return (
    <Container className="counter-container">
      <div className="counter">
        <h1>Yeni Yıla Kalan Süre</h1>
        <div className="time-display">
          <div className="time-segment">
            <FontAwesomeIcon icon={faGift} className="xl" />
            <span className="number">{timeLeft.days}</span>
            <span className="label">Gün</span>
          </div>
          <div className="time-segment">
            <FontAwesomeIcon icon={faSleigh} />
            <span className="number">{timeLeft.hours}</span>
            <span className="label">Saat</span>
          </div>
          <div className="time-segment">
            <FontAwesomeIcon icon={faCandyCane} />
            <span className="number">{timeLeft.minutes}</span>
            <span className="label">Dakika</span>
          </div>
          <div className="time-segment">
            <FontAwesomeIcon icon={faTree} />
            <span className="number">{timeLeft.seconds}</span>
            <span className="label">Saniye</span>
          </div>
        </div>
        <Button
          variant="outline-success"
          size="lg"
          onClick={handleConfetti}
          className="confetti-button"
        >
          Konfeti Patlat! 🎉
        </Button>
      </div>
      <div className="counter-image">
        <img src="./src/images/santa.png" />
      </div>
    </Container>
  );
};

export default NewYearCounter;
