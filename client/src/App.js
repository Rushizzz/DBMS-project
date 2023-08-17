import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AddConnection from './pages/AddConnection';
import Home from './pages/Home';
import Update from './pages/Update';
import Delete from './pages/Delete';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
      
        <Routes>
          
          <Route path="/home" element={<Home/>} />
          <Route path="/update" element={<Update/>} />
          <Route path="/delete" element={<Delete/>} />
          <Route path="/addconnection" element={<AddConnection/>} />
          <Route path="" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

