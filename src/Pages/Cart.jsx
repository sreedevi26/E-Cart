import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart } from '../redux/slices/cartSlice'

function Cart() {
  const cartArray = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  const [total,setTotal] = useState(0)
  const getCartTotal = () =>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  }
  useEffect(()=>{
    getCartTotal()
  },[cartArray])
  return (
    <div className='container' style={{ marginTop: '100px' }}>
      <Row className='m-5'>
        {
          cartArray.length > 0 ?
            <div className='row mt-5'>
              <div className='col-lg-8'>

                <table className='table shadow border'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product Name</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartArray.map((product, index) => (
                        <tr key={index}>
                          <th>{index + 1}</th>
                          <th>{product.title}</th>
                          <th><img height={'100px'} width={'100px'} src={product.thumbnail} alt="" /></th>
                          <th>${product.price}</th>
                          <th><button onClick={() => dispatch(removeFromCart(product.id))} className='btn'>
                            <i className='fa-solid fa-trash text-danger fa-2x'></i>
                          </button>
                          </th>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
              <div className='col-lg-1'></div>
              <div className='col-lg-3'>
              <h1 className='text-primary'>Cart Summary</h1>
              <h4 className='mt-3'>Total Product : <span>{cartArray.length}</span> </h4>
                  <h4>Total  : <span className='text-danger fw-bolder fs-2'>$ {total}</span></h4>
                  <div className='d-grid mt-5'>
                    <button className='btn btn-success rounded'>Check Out</button>
                  </div>
              </div>
            </div>
            :
            <div style={{ height: '60vh' }} className='w-100 d-flex flex-column justify-content-center align-items-center '>
              <img height={'250px'} src="https://previews.123rf.com/images/olegdudko/olegdudko1908/olegdudko190801153/128530644-electronics-shopping-cart.jpg" alt="" />
              <h3 className='fw-bolder'>Your wishlist is Empty!!!!</h3>
              <Link style={{ textDecoration: 'none' }} className='btn btn-success rounded' to={'/'}>Back to Home</Link>
            </div>

        }
      </Row>
    </div>
  )
}

export default Cart