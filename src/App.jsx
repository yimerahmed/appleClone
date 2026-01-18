// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/bootstrap.css";
import "./App.css";
// import './assets/css/styles.css'
// Import components
// import Header from "./Components/Header/Header";
import Main1 from "./Main1";
import Footer from "./Components/Footer/Footer";
// import youtube from './Components/Youtube/youtube';
import YoutubeVideos from "./Components/Youtube/YoutubeVideos";
// import YoutubeVideos from './Components/Youtube/YoutubeVideos'
import Iphone from "./Pages/iphone/Iphone";
import SharedLayout from "./Components/SharedLayout";
import ProductPage from "./Components/ProductPage/ProductPage";
import FourO4 from "./Components/FourO4";
import Mac from "./Pages/Mac";
import Ipad from "./Pages/Ipad";
import Watch from "./Pages/Watch";
import Tv from "./Pages/Tv";
import Music from './Pages/Music'
import Support from "./Pages/Support";
import Search from './Pages/Search'
import Cart from './Pages/Cart'
import AddProduct from "./Components/AddProduct/AddProduct";
// import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/add-product" element={<AddProduct />} />
            <Route index element={<Main1 />} />
            <Route path="/mac" element={<Mac />} />
            <Route path="/ipad" element={<Ipad />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/music" element={<Music />} />
            <Route path="/support" element={<Support />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/iphones" element={<Iphone />} />
            <Route path="/iphone/:Product_Id" element={<ProductPage />} />
            <Route path="*" element={<FourO4 />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
