import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './view/home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/> {/* This is the default route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
