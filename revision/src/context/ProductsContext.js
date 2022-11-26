import { createContext, useState } from "react";

export const ProductsContext = createContext()

const ProductsProvider = (props) => {
  const [products, setProducts] = useState([])
  
  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => setProducts(data))
  
  return (
    <ProductsContext.Provider value={products}>
      {props.children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider