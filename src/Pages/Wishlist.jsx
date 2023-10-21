import React from 'react'
import { Row,Card,Col,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slices/wishlistSlice'
import { addListener } from '@reduxjs/toolkit'

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  const handleWishlistCart = (product)=>{
    dispatch(addListener(product))
    dispatch(removeFromWishlist(product.id))
  }
  return (
    <div style={{marginTop:'100px'}}>
      <Row className='m-5'>
        {
          wishlistArray.length>0?
          wishlistArray.map((product,index)=>(
            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow rounded' style={{ width: '18rem', height: '30rem' }}>
              <Card.Img height={'200px'} variant="top" src={product.thumbnail} />
              <Card.Body>
                <Card.Title>{product?.title}Card Title</Card.Title>
                <Card.Text>
                  <p>{product?.description.slice(0, 50)}...</p>
                  <h4 className='fw-bolder'>{product?.price}</h4>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                  <Button onClick={()=>dispatch(removeFromWishlist(product.id))} className='btn btn-light'>
                    <i class="fa-solid fa-trash text-danger fa-2x"></i>
                  </Button>
                  <Button onClick={()=>dispatch(handleWishlistCart(product.id))} className='btn btn-light'>
                    <i class="fa-solid fa-cart-shopping text-success fa-2x"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          )):
          <div style={{height:'60vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center '>
            <img height={'250px'} src="https://previews.123rf.com/images/olegdudko/olegdudko1908/olegdudko190801153/128530644-electronics-shopping-cart.jpg" alt="" />
            <h3 className='fw-bolder'>Your wishlist is Empty!!!!</h3>
            <Link style={{textDecoration:'none'}} className='btn btn-success rounded' to={'/'}>Back to Home</Link>
          </div>
        }
      </Row>
    </div>
  )
}

export default Wishlist