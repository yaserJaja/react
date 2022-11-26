import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";

const ProductsList = () => {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch(api_url + "/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  };

  const getCategory = (cat) => {
    fetch(api_url + `/category/${cat}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-center pt-5 pb-4">Our Products</h2>
      <div className="container pb-5">
        <div className="text-center mb-3">
          <button className="btn btn-info me-2" onClick={() => getProducts()}>
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className="btn btn-info me-2"
              onClick={() => getCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="row">
          {products.map((product) => (
            <div className="col-3" key={product.id}>
              <Product product={product} showButton={true} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsList;
