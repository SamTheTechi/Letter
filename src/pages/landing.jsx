import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/landing.css';

const Landing = () => {
  const [animation, setAnimation] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setAnimation(true);
    setTimeout(() => {
      navigate(`/Slides`);
      setAnimation(false);
    }, 1700);
  };
  return (
    <section className='LandingCenter'>
      <button
        onClick={handleClick}
        className={`LandingContainer ${animation && `LandingAnimation`}`}>
        <h1>
          Click to <br />
          <span style={{ fontSize: '3rem' }}>Open it!</span>
        </h1>
      </button>
    </section>
  );
};

export default Landing;
