import React from 'react'

const Login = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Social2.0</span>
                <span className="title">Login</span>
                <form>
                    <input type="text" placeholder='display name' />
                    <input type="email" placeholder='email' />
                    <button>Sign Up</button>
                </form>
                <p>Yoy don't have an account? Register</p>
            </div>
        </div>
    )
}

export default Login