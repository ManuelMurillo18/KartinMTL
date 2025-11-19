import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header.jsx";
import { Routes, Route, Link } from "react-router-dom";
import Personnages from "./pages/personnages.jsx";
import Piste from "./pages/piste.jsx";
import Home from "./pages/home.jsx";

function App() {
  return (
    <>
      <Header />
     
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/personnages" element={<Personnages />} />
          <Route path="/piste" element={<Piste />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
