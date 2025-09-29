import React, { useState, useEffect } from "react";

const CountDown = () => {
  const [targetDate, setTargetDate] = useState("2025-11-27T23:59:59");
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        timeLeft = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }
      return timeLeft;
    };

    const timer = setInterval(() => {
      setCountdown(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const renderCountdownUnit = (value, unit) => (
    <div className="countdown-unit">
      <div className="countdown-number">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="countdown-label">{unit}</div>
    </div>
  );

  return (
    <div className="countdown-container">
      {/* Main content */}
      <div className="main-content">
        <div className="content-wrapper">
          {/* Header */}
          <div className="header">
            <p className="subtitle">Something Special Is Coming!</p>
          </div>

          {/* Countdown display */}
          <div className="countdown-wrapper">
            {renderCountdownUnit(countdown.days, "Days")}
            {renderCountdownUnit(countdown.hours, "Hours")}
            {renderCountdownUnit(countdown.minutes, "Minutes")}
            {renderCountdownUnit(countdown.seconds, "Seconds")}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .countdown-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 16px;
          background-color: #111827;
          color: white;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .main-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .content-wrapper {
          padding: 24px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 48px;
        }

        .subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.7);
          padding: 0 16px;
        }

        .countdown-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          margin-bottom: 48px;
        }

        .countdown-unit {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 24px 20px;
          min-width: 120px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .countdown-unit:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .countdown-number {
          font-size: 3.5rem;
          font-weight: bold;
          font-family: 'Courier New', monospace;
          color: white;
          filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
          line-height: 1;
        }

        .countdown-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 8px;
        }

        .status {
          text-align: center;
        }

        .time-up {
          font-size: 1.5rem;
          font-weight: 600;
          color: #fbbf24;
          animation: pulse 2s infinite;
        }

        .time-remaining {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.6);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .countdown-container {
            padding: 12px;
          }

          .content-wrapper {
            padding: 20px;
          }

          .subtitle {
            font-size: 1rem;
          }

          .countdown-wrapper {
            gap: 12px;
            margin-bottom: 32px;
          }

          .countdown-unit {
            padding: 20px 16px;
            min-width: 100px;
            flex: 1 1 calc(50% - 6px);
            max-width: calc(50% - 6px);
          }

          .countdown-number {
            font-size: 2.5rem;
          }

          .countdown-label {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .content-wrapper {
            padding: 16px;
          }

          .subtitle {
            font-size: 0.875rem;
          }

          .countdown-unit {
            padding: 16px 12px;
            min-width: 85px;
          }

          .countdown-number {
            font-size: 2rem;
          }

          .countdown-label {
            font-size: 0.7rem;
          }

          .time-up {
            font-size: 1.25rem;
          }

          .time-remaining {
            font-size: 0.875rem;
          }
        }

        @media (min-width: 1024px) {
          .content-wrapper {
            padding: 40px;
          }

          .subtitle {
            font-size: 1.5rem;
          }

          .countdown-unit {
            padding: 32px 28px;
            min-width: 140px;
          }

          .countdown-number {
            font-size: 4rem;
          }

          .countdown-label {
            font-size: 1rem;
          }
        }

        @media (min-width: 1280px) {

          .countdown-number {
            font-size: 5rem;
          }

          .countdown-unit {
            padding: 40px 32px;
            min-width: 160px;
          }
        }

        /* Animations */
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default CountDown;
