import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';

export default function ViewAuthorDetails() {
  const [authorDetails, setAuthorDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <h5>
          {authorDetails.authorObject?.first_name} {authorDetails.authorObject?.last_name}
          {authorDetails.authorObject?.favorite ? ' 🤍' : ''}
        </h5>
        Author Email: <a href={`mailto:${authorDetails.authorObject?.email}`}>{authorDetails.authorObject?.email}</a>
      </div>
    </div>
  );
}
