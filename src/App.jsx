import Navbar from "./components/Navbar";
import Events from "./components/Events";
import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  //este termino requiere rerenderizarze
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();
  // Esta funcion es usada por el hijo para ponerle al searchItem lo que el usuario es buscando
  const handleNavbarSearch = (term) => {
    console.log(containerRef.current);
    setSearchTerm(term);
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      <br />
      <Events searchTerm={searchTerm} />
    </>
  );
}

export default App;
