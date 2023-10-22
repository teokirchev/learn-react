import { useState } from "react";
import styles from "./CreateProduct.module.css"

function CreateProduct(props) {

    let [nameInputs, updateName] = useState('');
    let [descInputs, updateDesc] = useState('');
    let [priceInputs, updatePrice] = useState('');
    let [showForm, updateShowForm] = useState(false)

    let [availabilityInput, updateAvailability] = useState(false);

    const inputNameHandler = (e) => {
        updateName(e.target.value)
    }
    const inputDescHandler = (e) => {
        updateDesc(e.target.value)
    }
    const inputPriceHandler = (e) => {
        updatePrice(e.target.value)
    }
    const inputAvailabilityHandler = (e) => {
        console.log(e.target.value);
        updateAvailability(e.target.checked)
    }

    const createProductEventHandler = (e) => {
        e.preventDefault();
        let product = {
            name: nameInputs,
            desc: descInputs,
            price: Number(priceInputs),
            isAvailable: Boolean(availabilityInput),
        }
        updateName('');
        updateDesc('');
        updatePrice('');
        updateAvailability(availabilityInput);
        props.createProduct(product)
        // updateShowForm(false)
        onCancelButton()
    }

    const onCreateProductButton = () => {
        updateShowForm(true)
    }
    const onCancelButton = () => {
        updateShowForm(false)
    }

    return (
        <div>
            { !showForm && <button onClick={onCreateProductButton}>Create Product</button>}
            { showForm && 
            <form onSubmit={createProductEventHandler}>
                <h2>Create Product</h2>
                <input
                    type="text"
                    id="name"
                    placeholder="Name..."
                    onChange={inputNameHandler}
                    value={nameInputs} />

                <input
                    type="number"
                    id="price"
                    placeholder="Price..."
                    onChange={inputPriceHandler}
                    value={priceInputs} />
                <textarea
                    type="text"
                    id="desc"
                    placeholder="Description..."
                    onChange={inputDescHandler}
                    value={descInputs} />
                <div className={styles.wrapper}>
                    <label>Is product available in stock?</label>
                    <input
                        type="checkbox"
                        role="switch"
                        id="isAvailable"
                        onChange={inputAvailabilityHandler}
                    />
                </div>

                <button
                    type="submit"
                    style={{ backgroundColor: "green", border: "none", borderRadius: "4px", cursor: "pointer", color: "white" }}>Create</button>
                    <button onClick={onCancelButton}>Cancel</button>
            </form>}
        </div>
    );
};

export default CreateProduct