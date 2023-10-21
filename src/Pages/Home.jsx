import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Home() {
  const data = useFetch("https://dummyjson.com/products")
  // console.log(data);
  const dispatch = useDispatch()
  return (
    <Row className='ms-5' style={{ marginTop: '100px' }}>
      {
        data?.length > 0 ? data?.map((product, index) => (
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
                  <Button onClick={()=>dispatch(addToWishlist(product))} className='btn btn-light'>
                    <i class="fa-solid fa-heart text-danger fa-2x"></i>
                  </Button>
                  <Button onClick={()=>dispatch(addToCart(product))} className='btn btn-light'>
                    <i class="fa-solid fa-cart-shopping text-success fa-2x"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        )) : <p className='text-danger fw-bolder fs-5'>Nothing to Display!!!!</p>
      }
    </Row>
  )
}

export default Home