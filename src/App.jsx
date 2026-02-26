import React from "react";
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

const App = () => {
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
