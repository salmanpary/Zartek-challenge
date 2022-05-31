import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Products from './components/Products';

function App() {
  const[cartnumber,setcartnumber]=useState(0)
const saving=(value)=>{
  setcartnumber(value)
}
  return (<>
    <Navbar value={cartnumber}></Navbar>
    <Products onsave={saving}></Products>
</>
  );
}

export default App;
