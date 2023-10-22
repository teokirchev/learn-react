import styles from "./ProductList.module.css";
import Product from "../Product/Product";



function ProductList(props) {

    if (props.newProductList.length === 0) 
        return <h3 className={styles.noproducts}>There are no products here!</h3>
    
        return (
            <div>
                <ul>
                    {props.newProductList.map((prod) => {
                        return <Product
                            key={prod.id}
                            id={prod.id}
                            name={prod.name}
                            desc={prod.desc}
                            price={prod.price}
                            isAvailable={prod.isAvailable} />
                    })}


                </ul>
            </div>
        );
    }



export default ProductList;
