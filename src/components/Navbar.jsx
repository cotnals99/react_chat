import React, {useContext} from 'react'

import {signOut} from 'firebase/auth'
import {auth} from '../firebase'
import {AuthContext} from '../context/AuthContext'

const Navbar = () => {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className='logo'>Doubleda Chat</span>
      <div className="user">
        {/* <img src="https://images.pexels.com/photos/9407178/pexels-photo-9407178.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" /> */}
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
      </div>
      <button onClick={()=>signOut(auth)}>Logout</button>
    </div>
  )
}

export default Navbar