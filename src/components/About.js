import React from 'react'

const About = () => {
  const backgroundImage = `${process.env.PUBLIC_URL}/images/image.png`;

  const containerStyle = {
    width: '100%',
    height: 'auto',
    backgroundImage: `url(${backgroundImage})`,
    opacity:'0.8',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className='about'>
      <div style={containerStyle}>
      <h1>To stir up healthy interest in the learning of languages amongst african people</h1>
      {/* Other content */}
    </div>

    </div>
  )
}

export default About