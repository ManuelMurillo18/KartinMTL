import "./header.css";
import { Routes, Route, Link } from 'react-router-dom';
export default function Header() {
  return(
  <header className="game-header">
    <h1 className="navBarTitle">Karting Montréal ⚜️</h1>
    <nav>
      <Link to="/">À propos</Link>
      <Link to="/personnages">Personnages</Link>
      <Link to="/piste">Piste</Link>
    </nav>
  </header> 
  );
}
