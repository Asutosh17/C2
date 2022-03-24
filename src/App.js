import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [show,setShow]=useState(true);
 const [table,setTable]=useState([]);
  useEffect(()=>{
    GetData();
  },[]);

  const GetData=()=>{
    axios.get("http://localhost:8080/houses").then((response)=>{
       setTable(response.data);
    })
  }
  return (
    <div className="App">
      <button className="toggleForm" onClick={()=>{
        setShow(!show);
      }}>
         {show ? "Show Addhouse" : "Show Rentals"}
      </button>
      {show ? <Rentals table={table}/>: <AddHouse />}
  
      <br />
    </div>
  );
}

export default App;
