import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Hompage from './pages/Hompage';
import Campaign from './pages/Campaign';
import CallAndSpiels from './Resources/CallAndSpiels';
import Documentation from './Resources/Documentation';
import Exception from './Resources/Exception';
import AllCater from './pages/AllCater';
import SearchedItem from './pages/SearchedItem';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Hompage />} />
          <Route path='/all-categories' element={<AllCater />} />
          <Route path='/query/:id' element={<SearchedItem />} />

          <Route path='/filtering-of-leads' element={<Campaign />} />
          <Route path='/call-flow-and-spiels' element={<CallAndSpiels />} />
          <Route path='/documentation' element={<Documentation />} />
          <Route path='/exception-handling' element={<Exception />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
