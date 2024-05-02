import { useState, forwardRef, useImperativeHandle } from "react";

const Navbar = forwardRef(({ onSearch }, ref) => {
  const [search, setSearch] = useState("");

  useImperativeHandle(ref, () => ({
    search,
  }));

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(search);
    }
  };
  return (
    <div
      ref={ref}
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <p>Mi Boletera</p>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <input
          placeholder="Busca tu evento favorito"
          onChange={handleInputChange}
          value={search}
          onKeyDown={handleInputKeyDown}
          style={{
            border: "none",
            borderRadius: 4,
            padding: "5px 6px",
          }}
        />
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
