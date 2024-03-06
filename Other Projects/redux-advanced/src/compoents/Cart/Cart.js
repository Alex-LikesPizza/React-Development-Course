import React from 'react'
import styles from './Cart.module.css'
import CartItem from './CartItem'
import { UseSelector, useSelector } from 'react-redux'
const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items);
  return (
    <div className={styles.cart}>
      <h2>My Order</h2>
      <ul>
        <CartItem item={{
          id: 1,
          title: "pro",
          quantity: 1,
          total: 10.20,
          price: 10.20,
        }}/>
      </ul>
    </div>
  )
}

export default Cart