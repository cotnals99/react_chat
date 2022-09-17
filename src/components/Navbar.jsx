import React from 'react'

import {signOut} from 'firebase/auth'
import {auth} from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Doubleda Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/9407178/pexels-photo-9407178.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
        <span>User</span>
      </div>
      <button onClick={()=>signOut(auth)}>Logout</button>
    </div>
  )
}

export default Navbar