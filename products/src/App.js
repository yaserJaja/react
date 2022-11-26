import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ProductDeatils from "./components/ProductDeatils";
import ProductsList from "./components/ProductsList";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        ></Route>
        <Route path="/product/:id" element={<ProductDeatils />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
