import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VeiwProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`http://localhost:9000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    product && (
      <div>
        <h3 className="my-4 text-center">ID = {product.id}</h3>
        <hr />
        <h3>Title:</h3>
        <p className="ms-3">{product.title}</p>
        <h3>Price:</h3>
        <p className="ms-3">{product.price}$</p>
      </div>
    )
  );
};

export default VeiwProduct;
