import { useContext } from "react";
import { useRecoilState } from "recoil";
import { ProductsContext } from "./context/ProductsContext";
import productsState from "./recoil/ProductsAtom";


function Navbar () {
  // const products = useContext(ProductsContext)
  const [products, setProducts] = useRecoilState(productsState)
  return (
    <div className="Navbar container text-center mt-5">
      <h1>Products Count: {products.length}</h1>
    </div>
  )
}

export default Navbar;