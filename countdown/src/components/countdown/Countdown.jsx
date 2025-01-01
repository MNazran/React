import React, { useState, useEffect } from 'react';
import './styles.css';

const COUNTDOWN_TARGET = new Date('2025-12-31T23:59:59');

const getRemainingTime = () => {
  const now = new Date();
  const diff = COUNTDOWN_TARGET - now;

  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = String(Math.floor(diff / 1000 / 60 / 60) % 24).padStart(2, '0');
  const minutes = String(Math.floor(diff / 1000 / 60) % 60).padStart(2, '0');
  const seconds = String(Math.floor(diff / 1000) % 60).padStart(2, '0');

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

const Countdown = () => {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(getRemainingTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='countdown'>
      <h2>
        Countdown to <span style={{ color: '#144b40' }}>2026</span>
      </h2>
      <div className='content'>
        {Object.entries(remainingTime).map((el) => {
          const label = el[0];
          const value = el[1];
          return (
            <div className='box' key={label}>
              <div className='value'>
                <span>{value}</span>
              </div>
              <div className='label'>
                <span>{label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countdown;
