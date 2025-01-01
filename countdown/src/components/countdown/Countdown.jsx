import React, { useState, useEffect } from 'react';
import './styles.css';

const COUNTDOWN_TARGET = new Date('2025-12-31T23:59:59');

const getRemainingTime = () => {
  const now = new Date();
  const diff = COUNTDOWN_TARGET - now;

  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

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
      <h2>Countdown</h2>
      <div className='content'>
        <div className='box'>
          <div className='value'>
            <span>{remainingTime.days}</span>
          </div>
          <div className='label'>
            <span>Days</span>
          </div>
        </div>

        <div className='box'>
          <div className='value'>
            <span>{remainingTime.hours}</span>
          </div>
          <div className='label'>
            <span>Hours</span>
          </div>
        </div>

        <div className='box'>
          <div className='value'>
            <span>{remainingTime.minutes}</span>
          </div>
          <div className='label'>
            <span>Minutes</span>
          </div>
        </div>

        <div className='box'>
          <div className='value'>
            <span>{remainingTime.seconds}</span>
          </div>
          <div className='label'>
            <span>Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
