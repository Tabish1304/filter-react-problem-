import React from 'react'
import landingpageIMG from '..//assets/Undraw_Books.svg'
const Landing = () => {
  return (
    <section id='landing'>
      <header>
        <div className="header-container">
            <div className="header-description">
                <h1>Uk's Most Awarded Online Platform </h1>
                <h2>Find Your Dream Book with <span>Libray</span></h2>
                <a href="#features"><button className='btn'>Browse Books</button></a>
                <figure className='header-img-wrapper'>
                    <img src={landingpageIMG} alt="" />
                </figure>
            </div>
        </div>
      </header>
    </section>
  )
}

export default Landing



