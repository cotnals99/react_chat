import React from 'react'
import Add from '../img/addAvatar.png'
import Logo from '../img/logo.png'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <img src={Logo} alt="logo" width="50x" />
            <span className='logo'>DoubleDa Chat</span>
            <span className='title'>Register</span>
            <form>
                <input type="text" placeholder='Display Name' />
                <input type="email" placeholder='Enter email' />
                <input type="password" placeholder='Password' />
                <input style={{display:"none"}} type="file" id="file"/>
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    Add an Avatar
                </label>
                <button>Sign Up</button>
            </form>
            <p>You do have an account? Login</p>

        </div>
    </div>
  )
}

export default Register