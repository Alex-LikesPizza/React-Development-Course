import ProductItem from './ProductItem';
import styles from './Products.module.css'

const ITEMS =[
    {
        id:'1',
        price:20,
        title:'Product 1',
        description:'Super product 1',
    },
    {
        id:'2',
        price:50,
        title:'Product 2',
        description:'Super product 2',
    },
    {
        id:'3',
        price:80,
        title:'Product 3',
        description:'Super product 3',
    },
]
const Products = (props)=>{
    return(
        <section className={styles.products}>
            <h2>Lista cu produse</h2>
            <ul>
                {ITEMS.map((item)=>(
                    <ProductItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price ={item.price}
                        description={item.description}/>
                ))}
                
            </ul>
        </section>
    )
}

export default Products;