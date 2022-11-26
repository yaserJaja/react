import Navbar  from './components/Navbar';
import Products  from './components/Products';
import Cart  from './components/Cart';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />}></Route>
        <Route path='cart' element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
