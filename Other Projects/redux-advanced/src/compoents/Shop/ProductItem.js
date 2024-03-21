import { useDispatch } from 'react-redux';
import styles from './ProductItem.module.css'
import { cartActions } from '../Store/cart-slice';
const ProductItem = (props)=>{
    const dispatchAction = useDispatch();
    const {id, title, price, description} = props;
    const addItemCart = () => {
        dispatchAction(cartActions.addItem({
            id,
            title,
            price,
        })
        );
    };
    const removeItemCart = () => {
        dispatchAction(cartActions.removeItem(id));
    }
    return(
        <li>
            <header className={styles.item}>
                <h3>{title}</h3>
                <div className={styles.price}>${price.toFixed(2)}</div>
                <p>{description}</p>
            
            
            <div className={styles.actions}>
                <button onClick={addItemCart}>Add</button>
            </div>
            </header>
        </li>
    )
}

export default ProductItem;