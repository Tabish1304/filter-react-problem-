import React from 'react'
import FooterLogo from '..//assets/Library.svg'
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row-column">
            <a href="/">
                <figure className='footer-logo'>
                    <img className='footer-logo-img' src={FooterLogo} alt="" />
                </figure>
            </a>
          <div className="footer-list">
            <a className='footer-link' href="/">Home</a>
            <span className='footer-link no-cursor' href="/">About</span>
            <a className='footer-link' href="/books">Books</a>
            <a className='footer-link' href="/cart">Cart</a>
          </div>
          <div className="footer-copyright">Copyright &copy; 2021 Library</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
