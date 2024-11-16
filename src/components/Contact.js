import React from 'react'

export const Contact = () => {
  const backgroundImage = `${process.env.PUBLIC_URL}/images/image.png`;

  const containerStyle = {
    width: 'auto',
    height: 'auto',
    backgroundImage: `url(${backgroundImage})`,
    opacity:'0.8',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className='contact'>
        <div style={containerStyle}>
          <ul>
            <li>Dial: 07085544385,08055278040</li>
            <li>Instagram:unitelangauges</li>
            <li>G-mail:Unitelanguages@gmail.com</li>
          </ul>
        </div>

    </div>
  )
}
export default Contact