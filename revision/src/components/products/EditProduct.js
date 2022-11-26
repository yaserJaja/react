import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const EditProduct = () => {
  const { id } = useParams()
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState(0)

  const getProducts = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title)
        setCategory(data.category)
        setPrice(data.price)
      })
  }

  useEffect(() => {
    getProducts(`https://fakestoreapi.com/products/${id}`)
  }, [])

  const submitHandle = (e) => {
    e.preventDefault();
    fetch(
      `https://fakestoreapi.com/products/${id}`,{
        method: 'PUT',
        body: JSON.stringify({
          id,
          title,
          category,
          price,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <div className="edit-product container mt-4">
      <form onSubmit={submitHandle}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text" 
            className="form-control" 
            id="title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input
            type="text" 
            className="form-control" 
            id="category" 
            value={category}
            onChange={(e) => setCategory(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number" 
            className="form-control" 
            id="price" 
            value={price}
            onChange={(e) => setPrice(e.target.value)} 
          />
        </div>
        <button type="submit" className="btn btn-success">Edit Product</button>
      </form>
    </div>
  )
}

export default EditProduct