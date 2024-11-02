import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import FindPage from "../pages/FindPage";
import Donate from "../pages/Donate";

import NotFound from "../pages/NotFound";
import AppContextQuery from "./AppContextQuery";

const App: React.FC = () => {
  return (
    <AppContextQuery>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find" element={<FindPage />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AppContextQuery>
  );
};

export default App;
