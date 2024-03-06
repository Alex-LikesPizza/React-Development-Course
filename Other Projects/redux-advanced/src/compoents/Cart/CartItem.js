import React from 'react';
import styles from './CartItem.module.css';
const CartItem = (props) => {
  const { id, title, price, quantity, total } = props.item;
  return (
    <li className={styles.item}>
      <header>
        <h3>{title}</h3>
        <div className={styles.price}>
          ${total.toFixed(2)}{' '}
          <span className={styles['item-price']}>(${price.toFixed(2)})</span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          <span>{quantity}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button>-</button>
        <button>+</button>
      </div>
    </li>
  )
}

export default CartItem