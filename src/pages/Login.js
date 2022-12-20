import React from 'react'
import {auth} from "../firebase"
import {signInWithEmailAndPassword} from "firebase/auth"

const Login = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value
        const password = e.target[1].value

        try {
            const res = await signInWithEmailAndPassword(auth, email, password)
            console.log(res)
        }catch(err){
            console.log(err)
        }

    }

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Social2.0</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <button>Sign Up</button>
                </form>
                <p>Yoy don't have an account? Register</p>
            </div>
        </div>
    )
}

export default Login