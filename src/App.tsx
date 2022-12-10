import React from "react";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import Form from './components/Form/Form';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
