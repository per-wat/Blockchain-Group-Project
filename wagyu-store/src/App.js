import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemCard from "./components/Item Card";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
