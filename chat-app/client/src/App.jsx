import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import CodeForInterview from "./components/CodeForInterview";
import Navbar from "./components/Navbar";
import React from "react";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CodeForInterview />} />
          <Route path="/all" element={<AllUsers />} />
          <Route path="/add" element={<AddUser />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
