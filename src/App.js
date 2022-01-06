import { useState } from "react";
import MovieList from "./MovieList";
import Nabvar from "./Navbar";

function App() {
  const [search, setSearch] = useState();

  function handleSearch (search){
      setSearch(search);
  }
  
  return (
    <div>
      <Nabvar search={search}  handleChange={handleSearch}/>
      <MovieList title={search}/>
    </div>
  );
}

export default App;
