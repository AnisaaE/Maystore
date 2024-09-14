import "./App.css";
import { Route, Routes, Link } from "react-router-dom";

import { AuthProvider } from "./context/authContex";
import { CartProvider } from "./context/cardContext";
import { ProductProvider } from "./context/productContext";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import { Intro } from "./components/Home/Intro";
import { Footer } from "./components/Footer/Footer";
import { Stickers } from "./components/Stickers/Stickers";
import ProductCatalog from "./components/Catalog/Catalog";
import Detail from "./components/Detail/Detail";
import ShoppingCart from "./components/ShoppingCard/ShoppingCard";
import CheckoutComponent from "./components/Check-out/checkOut";
import AcceptedOrder from "./components/AcceptedOrder/AcceptedOrder";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Favourites from "./components/Favourites/Favourites";
import { FavouritesProvider } from "./context/favouritesContext";
import { ErrorPage } from "./components/Error/Error";
import ScrollToTop from "./utils/Scroll-Top";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <FavouritesProvider>
          <CartProvider>
            <ProductProvider>
              <NavigationBar />
              <ScrollToTop/>
              <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/favorites" element={<Favourites />} />
                <Route path="/stickers" element={<Stickers />} />
                <Route path="/all" element={<ProductCatalog />} />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route
                  path="/clothing/:subcategory"
                  element={<ProductCatalog />}
                />
                <Route
                  path="/gifts/:subcategory"
                  element={<ProductCatalog />}
                />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/product/:productId" element={<Detail />} />
                <Route path="/checkout" element={<CheckoutComponent />} />
                <Route path="/acceptedOrder" element={<AcceptedOrder />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </ProductProvider>
          </CartProvider>
        </FavouritesProvider>
      </AuthProvider>

      <Footer />
    </div>
  );
}

export default App;
