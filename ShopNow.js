import React from 'react'
import { useNavigate } from 'react-router-dom'
import Img1 from '../images/R.jfif'
import Img2 from '../images/R 1.jfif'
import Img3 from '../images/R 2.jfif'
import Img4 from '../images/R 3.jfif'
import Img5 from '../images/R 4.jfif'
import Img6 from '../images/R 5.jfif'

function ShopNow() {
  const navigate= useNavigate();
  const handleBack= ()=>{
    navigate('/Main');
  }
  return (
    <div className='shopnow'>
        <h1 className="shopnow-heading">Products</h1>
        <div className="products-grid">
        <section className="products">
            <img src={Img1} alt="img1"/>
            <p className="products-text">Lorem ipsum dolor sit amet.</p>
            <p className="products-text">$100</p>
            <button className='btn'>Get Now</button>
        </section>
        <section className="products">
            <img src={Img2} alt="img1"/>
            <p className="products-text">Lorem ipsum dolor sit amet.</p>
            <p className="products-text">$120</p>
            <button className='btn'>Get Now</button>
        </section>
        <section className="products">
            <img src={Img3} alt="img1"/>
            <p className="products-text">Lorem ipsum dolor sit amet.</p>
            <p className="products-text">$150</p>
            <button className='btn'>Get Now</button>
        </section>
        <section className="products">
            <img src={Img4} alt="img1"/>
            <p className="products-text">Lorem ipsum dolor sit amet.</p>
            <p className="products-text">$300</p>
            <button className='btn'>Get Now</button>
        </section>
        <section className="products">
            <img src={Img5} alt="img1"/>
            <p className="products-text">Lorem ipsum dolor sit amet.</p>
            <p className="products-text">$250</p>
            <button className='btn'>Get Now</button>
        </section>
        <section className="products">
            <img src={Img6} alt="img1"/>
            <p className="products-text">Lorem ipsum dolor sit amet.</p>
            <p className="products-text">$200</p>
            <button className='btn'>Get Now</button>
        </section>
        </div>
        <button onClick={handleBack} className='shop-btn'>Back</button>      
    </div>
  )
}

export default ShopNow
