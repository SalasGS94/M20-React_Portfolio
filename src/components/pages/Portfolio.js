import React from 'react';

export default function Portfolio() {
  return (
    <div id="Work" className="Work">
      <h2>Portfolio</h2>
      <form>

      <div className="container d-flex justify-content-evenly">
        <a href="https://github.com/SalasGS94/challenge5">
          <div className="ch1">
            <h3>Work Day Scheduler</h3>
          </div>
        </a>

        <a href="https://github.com/SalasGS94/PWA_Text_Editor">
          <div className="ch2">
            <h3>PWA Text Editor</h3>
          </div>
        </a>
      </div>
      <div className="container d-flex justify-content-evenly">
        <a href="https://github.com/SalasGS94/Ch13-E-commerce_backend">
          <div className="ch3">
            <h3>E-commerce backend</h3>
          </div>
        </a>

        <a href="https://github.com/SalasGS94/challenge6.2">
          <div className="ch4">
            <h3>Weather Forecast App</h3>
          </div>
        </a>          

      </div>
      </form>
    </div>
  );
}
