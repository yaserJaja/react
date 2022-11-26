import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const ProductDeatils = (props) => {
  const params = useParams();

  const [product, setProduct] = useState([]);

  const api_url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(api_url + `/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [params.id]);

  return (
    <>
      <Product product={product} showButton={false} />
    </>
  );
};

export default ProductDeatils;
