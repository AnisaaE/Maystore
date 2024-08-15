import './App.css';
import { Route, Routes } from "react-router-dom";
import NavigationBar from './components/NavigationBar/NavigationBar';
import { Intro } from './components/Home/Intro';
import { Footer } from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <NavigationBar/>
     <Intro/>
     <Footer/>
    </div>
  );
}

export default App;
