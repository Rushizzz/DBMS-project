import React, { useEffect } from 'react';
import Axios from 'axios';
import { useState } from 'react';
import '../Styles/Addconnection.css';


function AddConnection() {

  const[Cus_ID, setCus_ID] = useState('')
  const[Name, setName] = useState('')
  const[DOB, setDOB] = useState('')
  const[Address, setAddress] = useState('')
  const[Age, setAge] = useState('')

  const[Connection_ID, setConnection_ID] = useState('')
  const[Connection_type, setConnection_type] = useState('')
  const[Connection_usage, setConnection_usage] = useState('')

  function countAge(DOB) {
    
    let day = new Date(DOB).getDate();
    let month = new Date(DOB).getMonth();
    let year = new Date(DOB).getYear();
    console.log(day,month,year)
    let today = new Date();
    
    let todayDay = new Date(today).getDate();
    let todayMonth = new Date(today).getMonth();
    let todayYear = new Date(today).getYear();
    
    let computedAge = 0;
    
    if (todayMonth > month) {
      console.log('im in after2') 
      computedAge = todayYear - year;
       
      console.log("HI age = ",computedAge);     
      setAge(computedAge);     
    }
    else if(todayMonth == month){
      if (todayMonth > month) {
        computedAge = todayYear - year;            
      }
    }
    else{
      computedAge = todayYear - year - 1;
    }
    
    setAge(computedAge);
}
  
  const addCustomer = () => {
    countAge(DOB)
    
    console.log("age = ",Age)
    Axios.post('http://localhost:3001/create1', {
      Cus_ID: Cus_ID,
      Name: Name,
      DOB: DOB,
      Address: Address,
      Age: Age
      
    }).then(() => {
      console.log("succes")
      alert('customer inserted')
    });
  };
  
  
  const addConnection = () => {
    Axios.post('http://localhost:3001/create2', {
      Connection_ID: Connection_ID,
      Connection_type: Connection_type,
      Connection_usage: Connection_usage
    }).then(() => {
      console.log("succes")
      alert('connection inserted')
    });
  };

  const CustomerDelete = () => {
    Axios.post('http://localhost:3001/delete1', {
      Cus_ID: Cus_ID,
    }).then(() => {
      console.log("succes")
      alert('Deleted')
      setCus_ID  = ''
    });
  };

  
  return (
    <div className='page'>
      <div className="form">
        <h1>Add Record</h1>
        <div className="dataEntry">
          <div className="customer">
              <p>Add Customer</p>
                <div className="inside">
                  <div className="row">
                      <label htmlFor="">Enter ID</label>
                      <input type="text" onChange={(event) => {
                        setCus_ID(event.target.value)
                      }} name="Cus_ID"/>
                  </div>
                  <div className="row">
                    <label htmlFor="">Name</label>
                    <input type="text" onChange={(event) => {
                        setName(event.target.value)
                      }} name="Name"/>
                  </div>
                  <div className="row">
                    <label htmlFor="">Date of Birth</label>
                    <input type="text" onChange={(event) => {
                        setDOB(event.target.value)
                      }} name="DOB"/>
                  </div>
                  <div className="row">
                    <label htmlFor="">Address</label>
                    <input type="text" onChange={(event) => {
                        setAddress(event.target.value)
                      }} name="Address"/>
                  </div>
                </div>
              <button onClick={addCustomer}>Add customer</button>
          </div>
          <div className="connection">
              <p>Add Connection</p>
                <div className="inside">
                  <div className="row">
                    <label htmlFor="">Connection ID</label>
                    <input type="text" onChange={(event) => {
                      setConnection_ID(event.target.value)
                    }} name="Connection_ID"/>
                  </div>    
                  <div className="row">
                    <label htmlFor="">Connection Type</label>
                    <input type="text" onChange={(event) => {
                      setConnection_type(event.target.value)
                    }} name="Connection_type"/>
                  </div>
                  <div className="row">
                    <label htmlFor="">Current Usage</label>
                    <input type="text" onChange={(event) => {
                      setConnection_usage(event.target.value)
                    }} name="Current_Usage"/>
                  </div>    
                </div>
                <button onClick={addConnection}>Add connection</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default AddConnection