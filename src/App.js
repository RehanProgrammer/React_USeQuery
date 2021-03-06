import React, { useState } from "react";
import Nav from "./components/Navbar";
import Planets from "./components/Planets";
import People from "./components/People";
import { ReactQueryDevtools } from "react-query-devtools";

function App() {
  const [page, setPage] = useState("planets");
  return (
    <>
      <div className="App">
        <h1>Star Wars Info by Rehan</h1>
        <Nav setPage={setPage} />
        <div className="content"></div>
        {page === "planets" ? <Planets /> : <People />}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
