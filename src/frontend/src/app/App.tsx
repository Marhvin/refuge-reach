import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import FindPage from "../pages/FindPage";
import Donate from "../pages/Donate";
import AdminPage from "../pages/AdminPage.tsx";
import Login from "../pages/Login";
import UserAuthCallback from "../pages/UserAuthCallback";

import NotFound from "../pages/NotFound";
import AppContextQuery from "./AppContextQuery";

const App: React.FC = () => {
  return (
    <AppContextQuery>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/find" element={<FindPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/user/auth/callback" element={<UserAuthCallback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AppContextQuery>
  );
};

export default App;
