import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import logo from '../images/logo.png'

function Login() {
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const navigate= useNavigate();
    const handleLogin= () =>{
        if(username === 'admin' && password === '1234'){
            navigate('/Navbar')
            navigate('/Main')
        }
        else{
            alert('Invalid username or passowrd')
        }
    }
  return (
    <div className='login'>
        <section className='login-form'>
            <img src={logo} alt="logo"/>
            <h1 className='login-heading'>User Login</h1>
            <p className="login-text">Username</p>
            <input 
            className='login-input' 
            type="text" 
            placeholder='Enter Username'
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            />
            <p className="login-text">Password</p>
            <input 
            className='login-input' 
            type="password" 
            placeholder='Enter Password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            /><br/>
            <button className="login-btn" onClick={handleLogin}>Submit</button>
        </section>
    </div>
  )
}

export default Login
