import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/landing.css';
import { orientaion, device } from '../util/util';

const Landing = () => {
  const [orientation, setOrientation] = useState(true);
  const [animation, setAnimation] = useState(false);
  let polling;

  if (orientation) {
    polling = setInterval(() => {
      setOrientation(!device() || orientaion());
    }, 150);
  }

  const navigate = useNavigate();
  const handleClick = () => {
    setAnimation(true);
    const slide = setTimeout(() => {
      navigate(`/slides`);
      setAnimation(false);
      clearInterval(polling);
      clearTimeout(slide)
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
