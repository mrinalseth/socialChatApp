import React, { useState } from 'react'
import Add from '../img/addAvatar.png'
import {auth} from "../firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"

const Register = () => {

  const [err, setErr] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]
    
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)
      
    }catch(error){
      console.log(error)
      setErr(true)
    }

  }
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Social2.0</span>
            <span className="title">Signup</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input type="file" id='file' style={{display: "none"}} />
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
                {err && <span>Something wrong</span>}
            </form>
            <p>Yoy already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register