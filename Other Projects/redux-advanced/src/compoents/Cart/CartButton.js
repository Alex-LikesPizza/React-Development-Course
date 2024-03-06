import styles from './CartButton.module.css'
import mainActions from '../Store/main-slice';
import { useDispatch, useSelector } from 'react-redux'
const CartButton = (props)=>{
    const dispatchActions = useDispatch;
    const cartVisibility = () => {
        dispatchActions(mainActions.toggleCartVisibility);
    }
    return(
        <button className={styles.button} onClick={cartVisibility}>
            <span>Cart</span>
            <span className={styles.badge}>0</span>
        </button>
    )
}

export default CartButton;