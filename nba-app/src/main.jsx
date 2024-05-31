import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Analysis from './components/analysis.jsx';
import './index.css';
import Prediction from './components/Prediction.jsx';
import ModelBreakdown from './components/ModelBreakdown.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/predictions" element={<Prediction />} />
        <Route path="/model-breakdown" element={<ModelBreakdown />} />
        {/* <Route path="/model-breakdown" element={<ModelBreakdown />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);
