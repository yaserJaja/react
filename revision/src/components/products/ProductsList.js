import { useContext, useEffect, useState } from "react"
import { ProductsContext } from "../../context/ProductsContext"
import Product from "./Product"

const ProductsList = () => {
  // const [products, setProducts] = useState([])
  // const getProducts = (url) => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data)
  //       console.log(data)
  //     })
  // }
  // useEffect(() => {
  //   getProducts('https://fakestoreapi.com/products')
  // }, [])

  const products = useContext(ProductsContext)

  return (
    <div className="products-list mt-3">
      {
        products && (
          products.map((product) => (
            <Product product={product} key={product.id} />
          ))
        )
      }
    </div>
  )
}

export default ProductsList