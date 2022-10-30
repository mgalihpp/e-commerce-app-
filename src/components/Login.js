import React from 'react'
import { Link } from 'react-router-dom'

import '../style/login.css'

const Login = () => {
    return(
        <div className='login-container'>
            <div className="login-box">
               <h1>Login</h1>
               <hr />

                <label for="email"><b>Email</b></label>
               <input type="text" placeholder="Your Email" name="email" id="email" required></input> 

                <label for="pw"><b>Password</b></label>
                <input type="password" placeholder="Enter Your Password" name="pw" id="pw" required></input>

                <hr />

                <Link to="/home"><button className="regisBtn" type="submit">Login</button></Link>
        
            </div>
        </div>
    )
}

export default Login