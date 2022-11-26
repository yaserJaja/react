import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const goToProductsPage = useNavigate();

  const [title, setTitle] = useState("");

  const [price, setPrice] = useState(0);

  const submitHandle = (e) => {
    e.preventDefault();
    fetch("http://localhost:9000/products", {
      method: "POST",
      body: JSON.stringify({
        title,
        price,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => goToProductsPage("/products"));
  };

  return (
    <div className="container w-75 mt-4">
      <form onSubmit={submitHandle}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
