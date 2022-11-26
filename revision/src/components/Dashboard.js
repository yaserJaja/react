import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const Dashboard = () => {

  const [products, setProducts] = useState([])
  const navigateToHome = useNavigate()
  const deleteSwal = withReactContent(Swal);

  const getProducts = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
  }

  const deleteClickHandle = (id) => {
    deleteSwal.fire({
      title: <p>Are You Sure Delete This Product?</p>,
      showCancelButton: true
    }).then((res) => {
      if (res.isConfirmed) {
        fetch(`https://fakestoreapi.com/products/${id}`,{
          method: 'DELETE'
        }).then((res) => {
          navigateToHome('/')
        }
      )}
    })
  }
  
  useEffect(() => {
    getProducts('https://fakestoreapi.com/products')
  }, [])

  return (
    <div className="container mt-3">
      <Link to='/add' className="btn btn-primary">Add Product</Link>
      <table className="table text-center mt-3">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col" colSpan={3}>Controls</th>
          </tr>
        </thead>
        <tbody>
          {
            products && products.map((product) => (
            <tr key={product.id}>
              <th>{product.id}</th>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>
                <Link to={`/view/${product.id}`} className="btn btn-secondary">More</Link>
              </td>
              <td>
                <Link to={`/edit/${product.id}`} className="btn btn-success">Edit</Link>
              </td>
              <td>
                <button onClick={() => deleteClickHandle(product.id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard