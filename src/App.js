import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import KebapPage from "./KebapPage";
import DonerPage from "./DonerPage";
import PideLahmacunPage from "./PideLahmacunPage";
import SalatalarPage from "./SalatalarPage";
import DessertsPage from "./DessertsPage";
import DrinksPage from "./DrinksPage";
import GunlukMenu from "./GunlukMenu";
import Login from "./Login";
import MenuForClient from "./MenuForClient";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kebap" element={<KebapPage />} />
        <Route path="/doner" element={<DonerPage />} />
        <Route path="/pideler" element={<PideLahmacunPage />} />
        <Route path="/salatalar" element={<SalatalarPage />} />
        <Route path="/tatlilar" element={<DessertsPage />} />
        <Route path="/mesrubatlar" element={<DrinksPage />} />
        <Route path="/gunluk-menu" element={<GunlukMenu />} />
        <Route path="/gunluk-menu-client" element={<MenuForClient />} />
        <Route path="/login" element={<Login/>} />
        
      </Routes>
    </Router>
  );
};

export default App;
