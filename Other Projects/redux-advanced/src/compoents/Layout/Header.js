import styles from "./Header.module.css"
import CartButton from "../Cart/CartButton";
const Header = (props)=>{
    return(
        <header className={styles.header}>
            <h1>Shop</h1>
            <nav>
                <ul>
                    <li>
                        <CartButton/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;