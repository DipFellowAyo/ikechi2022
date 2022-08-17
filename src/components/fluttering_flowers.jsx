import React from 'react';

const FlutteringFlowers = (props) => {
  return (
    <div style={{top:props.top, left: props.side}} className='fluttering_flowers_container'>
        <img className="fluttering_flowers" src={process.env.PUBLIC_URL+"/vectors/fluttering_hearts.png"} alt="fluttering_flowers" />
    </div>
  )
}

export default FlutteringFlowers;