import styles from './CartButton.module.css'
import { mainActions } from '../Store/main-slice';
import { useDispatch, useSelector } from 'react-redux'
const CartButton = (props) => {
    const itemsQuantity = useSelector((state) => state.cart.itemsQuantity);
    const dispatchAction = useDispatch();
    const cartVisibility = () => {
        dispatchAction(mainActions.toggleCartVisibility());
    }
    return(
        <button className={styles.button} onClick={cartVisibility}>
            <span>Cart</span>
            <span className={styles.badge}>{itemsQuantity}</span>
        </button>
    )
}

export default CartButton;