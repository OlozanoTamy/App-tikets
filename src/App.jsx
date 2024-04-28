import Navbar from "./components/Navbar";
import Events from "./components/Events";
import "./App.css";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  // Esta funcion es usada por el hijo para ponerle al searchItem lo que el usuario es buscando
  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} />
      <br />
      <Events searchTerm={searchTerm} />
    </>
  );
}

export default App;
