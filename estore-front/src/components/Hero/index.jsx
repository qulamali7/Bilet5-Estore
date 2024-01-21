import React from 'react'
import "./index.scss";
const Hero = () => {
  return (
    <>
    <section id='hero'>
        <div className='hero_container'>
            <div className='hero_content'>
                <img src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png" alt="" />
                <div className='hero_text'>
                    <p>60% Dicount</p>
                    <h1>Winter Collection</h1>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero