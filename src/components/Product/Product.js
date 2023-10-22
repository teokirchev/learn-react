import { useState } from "react";
import "../Product/Product.css"

function Product(props) {

    let [productCount, updateCount] = useState(0);

    function decrementProduct(e) {
        updateCount(--productCount);
    }

    function incrementProduct() {
        updateCount(++productCount);
    }

    return (
        <div className="wrapper">
            {<div className="container" style={{ backgroundColor: props.isAvailable ? "" : "grey" }}>
                <h1>{props.name}</h1>
                <p>{props.desc}</p>
                <p>{props.price}</p>
                <p className={props.isAvailable === true ? "available" : "unavailable"}>{props.isAvailable === true ? "Available" : "Unavailable"}</p>
                <button
                    className="plus-minus"
                    onClick={decrementProduct}
                    disabled={productCount === 0 ? true : false}
                    style={{ backgroundColor: productCount === 0 ? "rgb(82, 156, 225)" : "" }}>-</button>
                <span> {productCount} </span>
                <button
                    className="plus-minus"
                    onClick={incrementProduct}
                    disabled={productCount >= 10 ? true : false}
                    style={{ backgroundColor: productCount >= 10 ? "rgb(82, 156, 225)" : "" }}
                    >+</button>
            </div>}
        </div>
    );
}

export default Product;