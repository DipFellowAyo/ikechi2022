import React from 'react';

const Avatar = (props) => {
  return (
    <div className='rounded_avatar'>
        <img src={props.img} alt="avatar" />
    </div>
  )
};

export default Avatar;