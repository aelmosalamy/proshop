import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// Components
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
// Actions
import { addToCart } from '../actions/cartActions'

const CartScreen = () => {
  // React Router hooks
  const params = useParams()
  const history = useHistory()
  const location = useLocation()

  const productId = params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  console.log('cartItems', cartItems)

  useEffect(() => {
    // Dispatch addToCart if productId is passed through params, otherwise just display cart
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  return <>Cart</>
}

export default CartScreen
