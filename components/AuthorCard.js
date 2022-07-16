/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

function AuthorCard({
  firstName, lastName, email, firebaseKey, favorite, image,
}) {
  return (
    <>
      <img src={image} alt={firstName} />
      <div>First Name: {firstName}</div>
      <div>Last Name: {lastName}</div>
      <div>Email: {email}</div>
      <div>Favorite: {favorite}</div>
      <div>firebaseKey: {firebaseKey}</div>
    </>
  );
}

AuthorCard.propTypes = {
  image: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  favorite: PropTypes.bool,
  email: PropTypes.string,
  firebaseKey: PropTypes.string,
};

AuthorCard.defaultProps = {
  image: 'https://i.pinimg.com/564x/46/8c/71/468c7183d4c0ff5c0523f34002610a94.jpg',
  firstName: 'Eleven',
  lastName: 'Hopper',
  email: '11@upsidedown.com',
  favorite: false,
  firebaseKey: '011',
};

export default AuthorCard;
