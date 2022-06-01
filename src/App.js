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
  const[newweak,setnewweek]=useState(new WeakMap())
  const saving = (value) => {
    setcartnumber(value);
  };
  const savearr = (arr) => {
    setarr(arr);
  };
  const saveweakmap=(value)=>{
    setnewweek(value)
  }

  useEffect(() => {
    console.log(arr);
    console.log(arr.length);
    let unique = arr.filter((item, index) => arr.indexOf(item) === index);
    setfilteredarr(unique);
    console.log(unique);
    console.log(newweak)
  }, [arr,newweak]);


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar value={cartnumber}></Navbar>
              <Products onsave={saving} savearr={savearr} saveweakmap={saveweakmap}></Products>
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <Navbar value={cartnumber}></Navbar>
              <Order item={filteredarr} setfilteredarr={setfilteredarr} newweak={newweak} setnewweek={setnewweek} />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
