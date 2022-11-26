import { atom } from "recoil";

const productsState = atom({
  key: 'productsState',
  default: [
    {id: 1, title: 'product 1'},
    {id: 2, title: 'product 2'},
    {id: 2, title: 'product 3'},  
    {id: 3, title: 'product 4'}
  ]
})
export default productsState;

// function ProductsAtom () {
//   return (
//     <div className="products-atom container text-center mt-5">

//     </div>
//   )
// }

// export default ProductsAtom;