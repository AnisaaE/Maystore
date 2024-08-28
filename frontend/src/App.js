import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { Intro } from "./components/Home/Intro";
import { Footer } from "./components/Footer/Footer";
import { Stickers } from "./components/Stickers/Stickers";
import ProductCatalog from "./components/Catalog/Catalog";
import Detail from "./components/Detail/Detail";
import { ProductProvider } from "./context/productContext";
import { CartProvider } from "./context/cardContext";
import ShoppingCart from "./components/ShoppingCard/ShoppingCard";

function App() {
  return (
    <div className="App">
      <CartProvider>
      <ProductProvider>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/stickers" element={<Stickers />} />
          <Route path="/all" element={<ProductCatalog />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/product/:productId" element={<Detail />} />
          <Route path="/:category/:subcategory" element={<ProductCatalog />} />
        </Routes>
       </ProductProvider>
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
