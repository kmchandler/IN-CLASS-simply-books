/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteAuthorBooks } from '../api/mergedData';

function AuthorCard({
  onUpdate, authorObj,
}) {
  const deleteThisAuthor = () => {
    if (window.confirm('Delete this author?')) {
      deleteAuthorBooks(authorObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{authorObj.first_name} {authorObj.last_name}</Card.Title>
        <p className="card-text bold">{authorObj.favorite && <span>FAVORITE<br /></span> }</p>
        <p>{authorObj.email}</p>
        {/* DYNAMIC LINK TO VIEW THE AUTHOR DETAILS  */}
        <Link href={`/author/${authorObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE AUTHOR DETAILS  */}
        <Link href={`/author/edit/${authorObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisAuthor} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    image: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    favorite: PropTypes.bool,
    email: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

// AuthorCard.defaultProps = {
//   image: 'https://i.pinimg.com/564x/46/8c/71/468c7183d4c0ff5c0523f34002610a94.jpg',
//   firstName: 'Eleven',
//   lastName: 'Hopper',
//   email: '11@upsidedown.com',
//   favorite: false,
//   firebaseKey: '011',
// };

export default AuthorCard;
