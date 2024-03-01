import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/landing.css';

const Landing = () => {
  const [orientation, setOrientation] = useState(true);
  const [animation, setAnimation] = useState(false);

  if (orientation) {
    setInterval(() => {
      setOrientation(window.matchMedia('(orientation: portrait)').matches);
    }, 150);
  }

  const navigate = useNavigate();
  const handleClick = () => {
    setAnimation(true);
    setTimeout(() => {
      navigate(`/Slides`);
      setAnimation(false);
    }, 1600);
  };

  if (orientation) {
    return (
      <section className='LandingCenter'>
        <button
          onClick={handleClick}
          className={`LandingContainer ${animation && `LandingAnimation`} TextStyle`}>
          <h1>
            Click to <br />
            <span style={{ fontSize: '3rem' }}>Open it!</span>
          </h1>
        </button>
      </section>
    );
  } else
    return (
      <section className='LandingCenter'>
        <div
          className={`LandingContainer TextStyle`}
          style={{ minWidth: '40%', maxHeight: '60%', fontSize: '1.8rem' }}>
          <h1>
            Turn your Phone
            <br /> in Portrait mode
          </h1>
        </div>
      </section>
    );
};

export default Landing;
