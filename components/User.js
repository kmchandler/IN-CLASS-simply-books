/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { PropTypes } from 'prop-types';

export default function User({
  image, name, email, lastLogin,
}) {
  return (
    <>
      <div><img src={image} alt={name} /></div>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Last Login: {lastLogin}</div>
    </>
  );
}

User.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  lastLogin: PropTypes.string,
  email: PropTypes.string,
};

User.defaultProps = {
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQQ3G3-U-9nsjfYTNcEbC52qI3kqayEQKOdA&usqp=CAU',
  name: 'Eleven',
  lastLogin: '11/20/2020 06:48:00',
  email: 'email.@gmail.com',
};
