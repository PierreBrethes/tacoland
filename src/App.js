import './App.css';
import Header from './components/header/header.js';
import Homepage from './pages/homepage';
import Nfts from './pages/nfts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/nfts' element={<Nfts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
