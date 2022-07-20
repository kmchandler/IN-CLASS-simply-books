import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import { useAuth } from '../../utils/context/authContext';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  const { user } = useAuth();

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey, user]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details author-parent">
        <h5>
          {authorDetails.first_name} {authorDetails.last_name}
          {authorDetails.favorite ? ' 🤍' : ''}
        </h5>
        Author Email: <a href={`mailto:${authorDetails.email}`}>{authorDetails.email}</a>
      </div>
      <div className="d-flex flex-wrap">
        {authorDetails.books?.map((book) => (
          <BookCard key={book.firebaseKey} bookObj={book} onUpdate={setAuthorDetails} />
        ))}
      </div>
    </div>
  );
}
