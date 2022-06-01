import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Order from "./pages/Orders";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [cartnumber, setcartnumber] = useState(0);
  const [arr, setarr] = useState([]);
  const [filteredarr, setfilteredarr] = useState([]);
  const [counts, setcounts] = useState({});

  const saving = (value) => {
    setcartnumber(value);
  };
  const savearr = (arr) => {
    setarr(arr);
  };
  useEffect(() => {
    console.log(arr);
    console.log(arr.length);
    let unique = arr.filter((item, index) => arr.indexOf(item) === index);
    setfilteredarr(unique);
    console.log(unique);
  }, [arr]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar value={cartnumber}></Navbar>
              <Products onsave={saving} savearr={savearr}></Products>
            </>
          }
        />
        <Route path="/orders" element={
          <>
        <Navbar value={cartnumber}></Navbar>
        <Order filteredarr={filteredarr} setfilteredarr={setfilteredarr}/>
        </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
