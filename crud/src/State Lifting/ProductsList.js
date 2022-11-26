import { useContext } from 'react';
import { useRecoilState } from 'recoil';
import { ProductsContext } from './context/ProductsContext';
import productsState from './recoil/ProductsAtom';

function ProductsList () {

  // const products = useContext(ProductsContext)
  const [products, setProducts] = useRecoilState(productsState)
  return (
    <div className="products-list container text-center mt-5">
      {
        products.map((product) =>
          <h1 key={product.id}>{product.title}</h1>
        )
      }
    </div>
  )
}

export default ProductsList;