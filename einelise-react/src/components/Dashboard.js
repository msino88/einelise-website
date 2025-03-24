import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

export default function Dashboard() {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div>
      <h2>Welcome to your Dashboard ✍️</h2>
      <p>Here you can write your blog posts.</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
