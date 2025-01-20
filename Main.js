import React, { useState } from 'react'
import Img from '../images/shoe_image.png'
import Logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom'

function Main() {
  const [isOpen, setIsOpen]= useState(null);
  const toggleDropDown = (menu) =>{
    setIsOpen(isOpen === menu ? null: menu);
  }
  const navigate= useNavigate();
  const handleLogout= ()=>{
    navigate('/Login');
  }
  const handleShop= ()=>{
    navigate('/Shopnow');
  }

  return (
    <div>
    <div className='navbar'>
        <section className="navbar-logo">
            <img className='logo' src={Logo} alt="logo"/>
        </section>
        <section className="navbar-links">
            <ul>
                <li>
                    <a onClick={()=>toggleDropDown('menu')} className='link' href="#">Menu</a>
                    {isOpen === 'menu' && (
                    <div className="dropdown-content">
                    <a href="#action1">Home</a>
                    <a href="#action2">Shopnow</a>
                    <a href="#action3">Category</a>
                    </div>
                    )}
                </li>
                <li>
                    <a onClick={()=>toggleDropDown('location')} className='link' href="#">Location</a>
                    {isOpen === 'location' && (
                    <div className="dropdown-content">
                    <a href="#action1">Home</a>
                    <a href="#action2">Shopnow</a>
                    <a href="#action3">Category</a>
                    </div>
                    )}
                </li>
                <li>
                    <a onClick={()=>toggleDropDown('about')} className='link' href="#">About</a>
                    {isOpen === 'about' && (
                    <div className="dropdown-content">
                    <a href="#action1">Home</a>
                    <a href="#action2">Shopnow</a>
                    <a href="#action3">Category</a>
                    </div>
                    )}
                </li>
                <li>
                    <a onClick={()=>toggleDropDown('contact')} className='link' href="#">Contact</a>
                    {isOpen === 'contact' && (
                    <div className="dropdown-content">
                    <a href="#action1">Home</a>
                    <a href="#action2">Shopnow</a>
                    <a href="#action3">Category</a>
                    </div>
                    )}
                </li>
            </ul>
        </section>
        <section className="navbar-btn">
            <button onClick={handleLogout} className='btn'>Logout</button>
        </section>
    </div>
    <div className='main'>
        <section className='main-info'>
            <h1 className="main-heading">YOUR FEET DESERVE<br/>THE BEST</h1>
            <p className="main-text">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <button onClick={handleShop} className='shop-btn'>Shop Now</button>
            <button className='category-btn'>Category</button>    
        </section>
        <section className="main-img">
            <img src={Img} alt="img"/>
        </section>
    </div>
    </div>
  )
}

export default Main
