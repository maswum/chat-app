import React, { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const { unreadCount } = useContext(ChatContext);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={handleSignOut}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
