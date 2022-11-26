import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const goToProductsPage = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setPrice(data.price);
      });
  }, []);

  const submitHandle = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9000/products/${id}`, {
      method: "PUT",
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
            value={title}
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
            value={price}
            className="form-control"
            id="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Edit Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
