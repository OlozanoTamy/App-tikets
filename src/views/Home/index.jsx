import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import { useState, useRef } from "react";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();
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
};
export default Home;
