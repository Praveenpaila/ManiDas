import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";
import InfraStructure from "./pages/InfraStructure";
import Financial from "./pages/Financial";
import ScrollToTop from "./ScrollToTop";
import { useDispatch } from "react-redux";
import { setImages } from "./store/image";
import { setVideos } from "./store/videos";
import assets from "./assets/assets";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setImages(assets.images));
    dispatch(
      setVideos({
        one: assets.products.one,
        two: assets.products.two,
        three: assets.products.three,
      }),
    );
  }, []);
  return (
    <div>
      <Nav></Nav>
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/product" element={<Products />}></Route>
          <Route path="/infrastructure" element={<InfraStructure />}></Route>
          <Route path="/financial" element={<Financial />}></Route>
        </Routes>
      </main>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
