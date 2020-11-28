import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const { loading, error, products } = useSelector(state => state.productList)

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <h1>Latest Products</h1>
      {
        // Spinner if loading: true
        loading ? (
          <Loader />
        ) : // Display error if error exists (in case of PRODUCT_LIST_FAILURE)
        error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          // If everything is fine, display products
          <Row>
            {products.map(product => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )
      }
    </>
  )
}

export default HomeScreen
