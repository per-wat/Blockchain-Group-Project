import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemCard from "./components/Item Card";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import "./styles/App.css"
import "./styles/variables.css"

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/navbar" element={<NavBar/>} />
          <Route path="/itemcard" element={<ItemCard/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
