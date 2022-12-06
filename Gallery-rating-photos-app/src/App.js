import React, { useEffect, useState } from 'react';
import './style';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Main from './components/Main';
import Details from './components/Details';

export default function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate to={'/photo?id=0'} replace />}
          />
          <Route path={'/photo'} element={<Main />} />
          <Route path={'/photo/details'} element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}
