import React from 'react';
import Axios from 'axios';
import { useState } from 'react';

function Update() {
  const[Cus_ID, setCus_ID] = useState('')
  const[Name, setName] = useState('')
  const[DOB, setDOB] = useState('')
  const[Address, setAddress] = useState('')
  const[Age, setAge] = useState('')

  const[Connection_ID, setConnection_ID] = useState('')
  const[Connection_type, setConnection_type] = useState('')
  const[Connection_usage, setConnection_usage] = useState('')

  const updateCustomer = () => {
    Axios.post('http://localhost:3001/update1', {
      Cus_ID: Cus_ID,
      Name: Name,
      DOB: DOB,
      Address: Address
    }).then(() => {
      alert('updated');
    });
  };

  const updateConnection = () => {
    Axios.post('http://localhost:3001/update2', {
        Connection_ID: Connection_ID,
        Connection_type: Connection_type,
        Connection_usage: Connection_usage
    }).then(() => {
      alert('updated');
    });
  };

  return (
    <div className='page'>
        <div className="form">
        <h1>Add Record</h1>
        <div className="dataEntry">
          <div className="customer">
              <p>Update Customer</p>
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
              <button onClick={updateCustomer}>Update customer</button>
          </div>
          <div className="connection">
              <p>Update Connection</p>
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
                <button onClick={updateConnection}>Update connection</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Update