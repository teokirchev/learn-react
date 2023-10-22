import { useState } from "react";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import ProductList from "./components/ProductList/ProductList";
import Filter from "./components/Filter/Filter"

let products = [
  {
    id: '1',
    name: 'Watch',
    desc: 'The best watch in all country',
    price: '300$',
    isAvailable: true
  },
  {
    id: '2',
    name: 'Tablet',
    desc: 'The best tablet in all country',
    price: '500$',
    isAvailable: false
  },
  {
    id: '3',
    name: 'Smartphone',
    desc: 'The best smartphone in all country',
    price: '600$',
    isAvailable: true
  },
  {
    id: '4',
    name: 'Laptop',
    desc: 'The best laptop in all country',
    price: '1800$',
    isAvailable: true
  },
  {
    id: '5',
    name: 'Future phone',
    desc: 'The best phone in all country',
    price: '30$',
    isAvailable: true
  },

];

function App() {

  let [newProductList, updateProductList] = useState(products);
  let [filteredText, updateFilteredText] = useState('all');

  let filteredProduct = newProductList.filter((prod) => {
    if(filteredText === 'available') {
      return prod.isAvailable === true
    } else if (filteredText === 'unavailable') {
      return prod.isAvailable === false
    } else {
      return prod
    }
  })

  

  function createProduct(product) {
    product.id = newProductList.length + 1;
    updateProductList([product, ...newProductList]);
  };

  function filterProduct(filteredProduct) {
    updateFilteredText(filteredProduct)
  };

  

  return (
    <div>
      <CreateProduct createProduct={createProduct} />
      <Filter filterProduct={filterProduct}/>
      <ProductList newProductList={filteredProduct} />
    </div>
  );
}

export default App;
