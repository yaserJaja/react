import { useState } from "react"

const AddProduct = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState(0)

  const submitHandle = (e) => {
    e.preventDefault()
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify({
        title,
        category,
        price
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }
  return (
    <div className="add-product container mt-4">
      <form onSubmit={submitHandle}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input 
            type="text" 
            className="form-control" 
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input
            type="text" 
            className="form-control" 
            id="category"
            onChange={(e) => setCategory(e.target.value)}  
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number" 
            className="form-control" 
            id="price"
            onChange={(e) => setPrice(e.target.value)}  
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct