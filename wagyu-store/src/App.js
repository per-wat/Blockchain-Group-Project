import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HelloWorld from './js/Hello World';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HelloWorld/>} />
      </Routes>
    </Router>
  );
}

export default App;
