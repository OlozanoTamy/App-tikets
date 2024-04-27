import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(search);
    }
  };
  return (
    <>
      <p>Mi Boletera</p>
      <input
        placeholder="Busca tu evento favorito"
        onChange={handleInputChange}
        value={search}
        onKeyDown={handleInputKeyDown}
      />
    </>
  );
};

export default Navbar;
