import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ProductsList from './components/products/ProductsList';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddProduct from './components/products/AddProduct';
import ViewProduct from './components/products/ViewProduct';
import EditProduct from './components/products/EditProduct';
import ProductsProvider from './context/ProductsContext';
import Redux from './components/Redux';
import CyclePure from './redux/CyclePure';
import CycleReact from './redux/CycleReact';
import { Provider } from 'react-redux';
import store from './redux/store/store';

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Routes>
        <Route path="/" element={
          <ProductsProvider>
            <ProductsList />
          </ProductsProvider>
          }>
        </Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/add" element={<AddProduct />}></Route>
        <Route path="/view/:id" element={<ViewProduct />}></Route>
        <Route path="/edit/:id" element={<EditProduct />}></Route>
        <Route path="/redux" element={<Redux />}></Route>
      </Routes> */}
      {/* <CyclePure /> */}
      <Provider store={store}>
        <CycleReact />
      </Provider>
    </div>
  );
}

export default App;
