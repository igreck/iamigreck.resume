import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Details from "./containers/Details";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
