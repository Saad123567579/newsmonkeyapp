import './App.css';
import Navbar from './components/Navbar'; 
import Newss from './components/Newss';
import React, { useState } from 'react'

function App() {
  // c8cb0988283346ecbd50e581028f0f3b
      const [value,setvalue] = useState(20);
      const [search,setsearch] = useState("");
      const handlePages = (event) =>{
        setvalue(parseInt(event.target.innerText));
      
      }
      const handleSearch = (event) => {
        setsearch(event.target.previousElementSibling.value);
      }
      const handleDarkMode = (event) => {
        // if(document.body.style.backgroundColor=="white"){
        //   document.body.style.backgroundColor = "#15202b";
        // }
        // else {
        //   document.body.style.backgroundColor = "white";

        // }
      }
      return (
        <div>
          <Navbar handlePages={handlePages} handleSearch={handleSearch} handleDarkMode={handleDarkMode} />
          <Newss value={value} search={search} />
        </div>
      )
    
  }

export default App



