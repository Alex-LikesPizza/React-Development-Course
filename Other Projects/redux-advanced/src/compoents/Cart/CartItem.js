import React from 'react';
import styles from './CartItem.module.css';
import { cartActions } from '../Store/cart-slice';
import { useDispatch } from 'react-redux';
const CartItem = (props) => {
  const dispatchAction = useDispatch();
  const { id, title, price, quantity, total } = props.item;
  const addItemCart = () => {
    dispatchAction(
      cartActions.addItem({
        id,
        title,
        price,
      })
    );
};
const removeItemCart = () => {
    dispatchAction(cartActions.removeItem(id));
}
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
        <button onClick={removeItemCart}>-</button>
        <button onClick={addItemCart}>+</button>
      </div>
    </li>
  )
}

export default CartItem