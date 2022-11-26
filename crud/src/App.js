// import "./App.css";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import { Routes, Route, Outlet } from "react-router-dom";
// import Home from "./components/Pages/Home";
// import Products from "./components/Pages/Products";
// import AddProduct from "./components/Pages/AddProduct";
// import VeiwProduct from "./components/Pages/ViewProduct";
// import EditProduct from "./components/Pages/EditProduct";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <div className="row">
//         <div className="col-2 sidebar bg-light">
//           <Sidebar />
//         </div>
//         <div className="col-10">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/products" element={<Outlet />}>
//               <Route path="" element={<Products />} />
//               <Route path="edit/:id" element={<EditProduct />} />
//               <Route path="add" element={<AddProduct />} />
//               <Route path=":id" element={<VeiwProduct />} />
//             </Route>
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// State Lifting With Context API
// import "./App.css";
// import ProductsProvider from "./State Lifting/context/ProductsContext";
// import Navbar from "./State Lifting/Navbar";
// import ProductsList from "./State Lifting/ProductsList";

// function App() {

//   return (
//       <div className="App">
//         <ProductsProvider>
//           <Navbar /> 
//           <ProductsList />
//         </ProductsProvider>
//       </div>
//   );
// }

// export default App;


// // State Lifting With Recoil Library
// import { RecoilRoot } from "recoil";
// import "./App.css";
// import Navbar from "./State Lifting/Navbar";
// import ProductsList from "./State Lifting/ProductsList";

// function App() {

//   return (
//       <div className="App"> 
//         <RecoilRoot>
//           <Navbar /> 
//           <ProductsList />
//         </RecoilRoot>
//       </div>
//   );
// }

// export default App;

// State Lifting With Redux
import { useDispatch, useSelector } from "react-redux";
// import { disposit, withdraw } from "./State Lifting/redux/actions/bank-actions";
import { disposit, withdraw } from "./State Lifting/redux/rtk/slices/bank-slice";
import "./App.css";
import Products from "./State Lifting/redux/Products";
function App() {
  const state = useSelector(state => state.bank)
  const dispatch = useDispatch();
  return (
    <div className="App text-center mt-5"> 
      <p>Your Balance: {state}</p>
      <button 
        onClick={() => dispatch(withdraw(100))}
        className='btn btn-danger me-2    '
      >
        Withdraw 100
      </button>
      <button 
        onClick={() => dispatch(disposit(100))}
        className='btn btn-success'
      >
        Disposit 100
      </button>
      <Products />
    </div>
  );
}

export default App;