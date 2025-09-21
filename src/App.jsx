

import React from 'react';
import cobLogo from '/cob-logo.png';

export default function App() {
  return (
    <div className="site">
      <header className="site-header">
        <div className="header-flex">
          <div className="header-col header-left">
            <button className="menu-btn">
              <span className="menu-icon">&#9776;</span>
            </button>
          </div>
          <div className="header-col header-center">
            <span className="header-title">Culture of Business</span>
          </div>
          <div className="header-col header-right">
            <img src={cobLogo} alt="COB Logo" className="header-logo" />
          </div>
        </div>
      </header>
      <main className="site-main">
        <div className="home-container">
          <section className="intro">
            <p>August Issue Preview: Lorem Ipsum....</p>
          </section>
          <div className="group-photo">*group image*</div>
          <div className="bio">brief bio...</div>
        </div>
      </main>
    </div>
  );
}
