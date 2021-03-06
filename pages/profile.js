import React from 'react';
import User from '../components/User';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function Profile() {
  const { user } = useAuth();
  return (
    <div>
      <User
        name={user.displayName}
        image={user.photoURL}
        email={user.email}
        lastLogin={user.metadata.lastSignInTime}
      />
      <button type="button" onClick={signOut}>Sign Out</button>
    </div>
  );
}
