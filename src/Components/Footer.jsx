import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div
            className='d-flex justify-content-center align-item-center flex-column bg-primary text-light'
            style={{ width: '100%', height: '300px' }}>
            <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap'>
                <div style={{ width: '400px' }} className='website'>
                    <h4>
                        <i class="fa-solid fa-cart-shopping me-2"></i>E Cart
                    </h4>
                    <h6>A software resource that functions as an interface for users that buy items from a business online.
                        E-commerce websites use electronic shopping carts to facilitate purchasing by Web users.
                    </h6>
                    <h6>
                        An electronic shopping cart
                    </h6>
                </div>

                <div className='links d-flex flex-column'>
                    <h4>Links</h4>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }} Home></Link>
                    <Link to={'/cart'} style={{ textDecoration: 'none', color: 'white' }}>Cart</Link>
                    <Link to={'/whishlist'} style={{ textDecoration: 'none', color: 'white' }}>Wgishlist</Link>
                </div>
                <div className='contact d-flex flex-column flex-wrap'>
                    <h4>Guides</h4>
                    <Link to={'https://getbootstrap.com/'} style={{ textDecoration: 'none', color: 'white' }}>React</Link>
                    <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</Link>
                </div>

                <div className='contact d-flex flex-column flex-wrap'>
                    <h4>Contact Us</h4>
                    <div className='d-flex'>
                        <input className='form-control' placeholder='Enter Your mail' />
                        <div className='btn btn-info ms-3'><i class='fa-solid fa-arrow-right fa-beat'></i></div>
                </div>
                    <div className='icons mt-3 d-flex justify-content-evenly fs-5'>
                        <Link to={'https://getbootstrap.com/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-linkedin"></i></Link>
                        <Link  to={'https://getbootstrap.com/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-twitter"></i></Link>
                        <Link  to={'https://getbootstrap.com/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-facebook"></i></Link>
                        <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-instagram"></i></Link>
                        <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-solid fa-envelope"></i></Link>
                    </div>
                </div>
            </div>
            <p className='text-center mt-5'>Copyright © 2023 E Cart. Built with React</p>
        </div>
    )
}

export default Footer