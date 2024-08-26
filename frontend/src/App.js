import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { Intro } from './components/Home/Intro';
import { Footer } from './components/Footer/Footer';
import { Stickers } from './components/Stickers/Stickers';
import Category from './components/Home/Category/Category';
import ProductCatalog from './components/Catalog/Catalog';
import Detail from './components/Detail/Detail';



function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Intro/>} />
        <Route path="/:category/:subcategory" element={<Category />} />
        <Route path=":productId" element={<Detail/>} />
        <Route path="/stickers" element={<Stickers/>} />
      </Routes>
      <ProductCatalog/>
     <Footer/>
    </div>
  );
}

export default App;
