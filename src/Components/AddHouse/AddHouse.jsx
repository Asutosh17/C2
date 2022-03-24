
import axios from "axios";
import { useState } from "react";

export const AddHouse = () => {
  

  const [formData,setformData]=useState({
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
   setformData({
     ...formData,[className]:value,
   })
 }

 const handlesubmit=(e)=>{
   e.preventDefault();
   axios.post("http://localhost:8080/houses",formData).then(()=>{
     setformData({
      name:"",
      ownerName:"",
      address:"",
      areaCode:"",
      rent:"",
      bachelor:"",
      married:"",
      image:""
     })
    //  GetData();
   })
 }

//  const GetData=()=>{
//    axios.get("http://localhost:3001/houses").then((response)=>{

//    })
//  }
  return (
    <div className="addHouseContainer">
      <form onSubmit={handlesubmit}>
        <label>name</label>
        <input type="text" className="name" onChange={handlechange} value={formData.name} required />
        <br />
        <label>ownerName</label>
        <input value={formData.ownerName} type="text" onChange={handlechange} className="ownerName" required />
        <br />
        <label>address</label>
        <textarea value={formData.address} type="text" onChange={handlechange} className="address" required />
        <br />
        <label>areaCode</label>
        <input value={formData.areaCode} type="text" onChange={handlechange} className="areaCode" required />
        <br />
        <label>rent</label>
        <input value={formData.rent} type="text" onChange={handlechange} className="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={formData.bachelor} type="checkbox" className="bachelor" />
        <br />
        <label>married</label>
        <input checked={formData.married} type="checkbox" onChange={handlechange} className="married" />
        <br />
        <label>image</label>
        <input value={formData.image} type="text" onChange={handlechange} className="image" required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
