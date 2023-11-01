import './App.css';
import { Routes, Route } from "react-router-dom";
import { CAROUSEL } from './components/carousel';


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route exact path="/" element={<CAROUSEL/>}/>
      </Routes>
    </div>
  );
}

export default App;
