import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Products = () => {
  const [products, setProducts] = useState([]);

  const swal = withReactContent(Swal);

  const getProducts = () => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const deletProduct = (id) => {
    swal
      .fire({
        title: <h4>Are You Sure From Delete This Product?</h4>,
        showCancelButton: true,
      })
      .then((res) => {
        if (res.isConfirmed) {
          fetch(`http://localhost:9000/products/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => getProducts());
        }
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="pt-3 ps-3">
      <h1 className="mt-2 mb-4">Products</h1>
      <Link to="/products/add" className="btn btn-success">
        Add New Product
      </Link>
      <table className="table table-striped mt-4 text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title.slice(0, 20)}...</td>
              <td>{product.price}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm  me-1"
                  onClick={() => deletProduct(product.id)}
                >
                  Delete
                </button>
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-info btn-sm  me-1"
                >
                  Veiw
                </Link>
                <Link
                  to={`/products/edit/${product.id}`}
                  className="btn btn-primary btn-sm"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
