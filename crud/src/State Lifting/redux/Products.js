import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
// import { addProduct, fetchProducts } from './actions/products-actions'
import { addProduct } from './rtk/slices/products-slice';

function Products() {

  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()
  
  console.log(products);

  // useEffect(() => {
  //   dispatch(fetchProducts())
  // }, [])


  return (
    <div className='mt-3'>
      <h1>Products</h1>
      {
        products.map((product) => <h3 key={product.id}>{product.title}</h3>)
      }
      <button
        onClick={() => dispatch(addProduct({id: 2, title: 'product-2'}))}
        className= 'btn btn-primary my-2'  
      >
        add product
      </button>
    </div>
  ) 
}

export default Products;