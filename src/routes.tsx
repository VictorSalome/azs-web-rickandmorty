import React from "react";
import { Home } from "./pages/home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
