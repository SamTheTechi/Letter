import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section>
      <Link to={'/Slides'} className='PageContainer'></Link>
    </section>
  );
};

export default Landing;
