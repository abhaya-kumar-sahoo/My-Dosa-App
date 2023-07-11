import './App.css';
import Dosa from './Components/Dosa';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuItems from './Components/MenuItems';
import FoodItems from './Components/FoodItems';

function App() {
  return (
    <div className="App">
     <Router>
    <Routes>
      <Route path='/' element={<Dosa/>}/>
      <Route path='/' element={<MenuItems/>}/>
      <Route path="/FoodItems" element={<FoodItems/>} />
     
    </Routes>
  </Router>
    </div>
    
  );
}

export default App;
