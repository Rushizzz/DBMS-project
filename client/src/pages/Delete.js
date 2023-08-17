import React from 'react';
import Axios from 'axios';
import { useState } from 'react';

function Delete() {
  const[Cus_ID, setCus_ID] = useState('')
  
  const[Connection_ID, setConnection_ID] = useState('')
  
  const deleteCustomer = () => {
    Axios.post('http://localhost:3001/delete1', {
      Cus_ID: Cus_ID,
    }).then(() => {
      alert('deleted');
    });
  };

  const deleteConnection = () => {
    Axios.post('http://localhost:3001/delete2', {
        Connection_ID: Connection_ID,
    }).then(() => {
      alert('deleted');
    });
  };
  return (
    <div className='page'>
        <div className="form">
        <h1>Delete Record</h1>
        <div className="dataEntry">
          <div className="customer">
              <p>Delete Customer</p>
                <div className="inside">
                  <div className="row">
                      <label htmlFor="">Enter ID</label>
                      <input type="text" onChange={(event) => {
                        setCus_ID(event.target.value)
                      }} name="Cus_ID"/>
                  </div>
                </div>
              <button onClick={deleteCustomer}>delete customer</button>
          </div>
          <div className="connection">
              <p>Delete Connection</p>
                <div className="inside">
                  <div className="row">
                    <label htmlFor="">Connection ID</label>
                    <input type="text" onChange={(event) => {
                      setConnection_ID(event.target.value)
                    }} name="Connection_ID"/>
                  </div>    
                   
                </div>
                <button onClick={deleteConnection}>delete connection</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Delete