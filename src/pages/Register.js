import React from 'react'
import { Form, ButtonToolbar, Button, Input } from 'rsuite';
import Add from '../img/addAvatar.png'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Social2.0</span>
            <span className="title">Signup</span>
            <form>
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input type="file" id='file' style={{display: "none"}} />
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Yoy already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register