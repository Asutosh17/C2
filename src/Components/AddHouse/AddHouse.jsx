import axios from "axios";
import { useState } from "react";

export const AddHouse = () => {
  

  const [Data,setData]=useState({
    name:"",
    ownerName:"",
    address:"",
    areaCode:"",
    rent:"",
    bachelor:"",
    married:""
  })
 const handlechange=(e)=>{
   const {className,value}=e.target;
   setData({
     ...Data,[className]:value,
   })
 }

 const handlesubmit=(e)=>{
   e.preventDefault();
   axios.post("http://localhost:8080/houses",Data).then(()=>{
     setData({
      name:"",
      ownerName:"",
      address:"",
      areaCode:"",
      rent:"",
      bachelor:"",
      married:"",
      image:""
     })
    
   })
 }


  return (
    <div className="addHouseContainer">
      <form onSubmit={handlesubmit}>
        <label>name</label>
        <input type="text" className="name" onChange={handlechange} value={Data.name} required />
        <br />
        <label>ownerName</label>
        <input value={Data.ownerName} type="text" onChange={handlechange} className="ownerName" required />
        <br />
        <label>address</label>
        <textarea value={Data.address} type="text" onChange={handlechange} className="address" required />
        <br />
        <label>areaCode</label>
        <input value={Data.areaCode} type="text" onChange={handlechange} className="areaCode" required />
        <br />
        <label>rent</label>
        <input value={Data.rent} type="text" onChange={handlechange} className="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={Data.bachelor} type="checkbox" className="bachelor" />
        <br />
        <label>married</label>
        <input checked={Data.married} type="checkbox" onChange={handlechange} className="married" />
        <br />
        <label>image</label>
        <input value={Data.image} type="text" onChange={handlechange} className="image" required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
