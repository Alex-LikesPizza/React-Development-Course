import styles from './ProductItem.module.css'
const ProductItem = (props)=>{
    const {id, title, price, description} = props;
    return(
        <li>
            <header className={styles.item}>
                <h3>{title}</h3>
                <div className={styles.price}>${price.toFixed(2)}</div>
                <p>{description}</p>
            
            
            <div className={styles.actions}>
                <button>Add</button>
            </div>
            </header>
        </li>
    )
}

export default ProductItem;