import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import KebapPage from "./KebapPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kebap" element={<KebapPage />} />
      </Routes>
    </Router>
  );
};

export default App;
