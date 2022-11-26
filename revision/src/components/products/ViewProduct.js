import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Product from "./Product"
  
const ViewProduct = () => {
  
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [waitGetData, setWaitGetData] = useState(true);

  const getProducts = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data)
        setWaitGetData(false)
      })
  }

  useEffect(() => {
    getProducts(`https://fakestoreapi.com/products/${id}`)
  }, [])

  return (
    <div className="view-product mt-4">
      {
        waitGetData &&
        <h1 className="text-center">Please Wait Loading Data ...</h1>
      }
      {
        !waitGetData && 
        <Product product={product} />
      }
    </div>
  )
}

export default ViewProduct