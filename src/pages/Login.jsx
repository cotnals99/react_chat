import React from 'react'
import Add from '../img/addAvatar.png'
import Logo from '../img/logo.png'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <img src={Logo} alt="logo" width="50x" />
            <span className='logo'>DoubleDa Chat</span>
            <span className='title'>Login</span>
            <form>
                <input type="email" placeholder='Enter email' />
                <input type="password" placeholder='Password' />
             
                <button>Sign In</button>
            </form>
            <p>You do NOT have an account? Register</p>

        </div>
    </div>
  )
}

export default Login