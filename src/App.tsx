import React from "react";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import { Configuracao } from "./paginas/Configuracao/Configuracao";
import { Sorteio } from "./paginas/Sorteio/Sorteio";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Configuracao />} />
        <Route path='/sorteio' element={<Sorteio />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
