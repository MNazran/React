import React from 'react';
import './styles.css';

const Countdown = () => {
  return (
    <div className='countdown'>
      <h2>Countdown</h2>
      <div className='content'>
        <div className='box'>
          <div className='value'>
            <span>0</span>
          </div>
          <div className='label'>
            <span>Days</span>
          </div>
        </div>

        <div className='box'>
          <div className='value'>
            <span>0</span>
          </div>
          <div className='label'>
            <span>Hours</span>
          </div>
        </div>

        <div className='box'>
          <div className='value'>
            <span>0</span>
          </div>
          <div className='label'>
            <span>Minutes</span>
          </div>
        </div>

        <div className='box'>
          <div className='value'>
            <span>0</span>
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
