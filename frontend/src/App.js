import './App.css';
import { Route, Routes } from "react-router-dom";
import NavigationBar from './components/NavigationBar/NavigationBar';
import { Intro } from './components/Home/Intro';



function App() {
  return (
    <div className="App">
      <NavigationBar/>
     <Intro/>
    </div>
  );
}

export default App;
