import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {
    const wishlist = useSelector((state)=>state.wishlistReducer)
    const card = useSelector((state)=>state.cartReducer)
    return (
        <Navbar style={{zIndex:'1'}} expand="lg" className="bg-primary position-fixed top-0 w-100 mb-5">
            <Container>
                <Navbar.Brand ><Link to={'/'} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} >
                    <i class="fa-solid fa-cart-shopping me-2"></i>
                    E Cart</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='btn border rounded'>
                            <Link to={'/Wishlist'} className='d-flex align-items-center'
                                style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} >
                                <i class="fa-solid fa-heart text-danger me-2"></i>Whishlist
                                <Badge className='ms-2 rounded' bg="light">{wishlist.length}</Badge>
                            </Link>
                        </Nav.Link>
                        <Nav.Link className='btn border rounded ms-3'>
                            <Link to={'/cart'} className='d-flex align-items-center'
                                style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} >
                                <i class="fa-solid fa-cart-shopping text-warning me-2"></i>Cart
                                <Badge className='ms-2 rounded' bg="light">{card.length}</Badge>
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header