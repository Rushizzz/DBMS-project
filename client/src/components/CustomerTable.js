import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import '../Styles/CustomerTable.css'

function CustomerTable() {

  const [customerList, setcustomerList] = useState([]);
  const [con, setcon] = useState([]);
  
  const getCustomer = () => {
    Axios.get('http://localhost:3001/getall', {}).then((response) => {
      setcustomerList(response.data)
      console.log(response.data)
      console.log('i m runing')
    });

    Axios.get('http://localhost:3001/getcon', {}).then((response) => {
      setcon(response.data)
      console.log(response.data)
      console.log('i m flying')
    });
  }

  
  
  console.log("cl = ",customerList.ID_cus)
  console.log("con = ",con)
  return (
    <div className="view">
        <div className="header">
                <p>Customer table</p>
                <button onClick={getCustomer}>show records</button>
         </div>
         
        <div className="tableView">
            <div className="tableBlock">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {customerList.map((val, key) => {
                    return (
                      
                        <tr key={key} className="row1">
                          <td>{val.ID_cus}</td>
                          <td>{val.name}</td>
                          <td>{val.age}</td>
                        </tr>
                    )
                  })}
                </tbody>
              </table>
              <table>
              <thead>
                  <tr>
                    
                    <th>Connection ID</th>
                    <th>Connection Type</th>
                  </tr>
                </thead>
                <tbody>
                  {con.map((val, key) => {
                    return (
                      
                        <tr key={key} className="row1">
                         
                          <td>{val.connection_ID}</td>
                          <td>{val.connection_type}</td>
                        </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            {/* <Data/> */}
        </div>
    </div>
  )
}

export default CustomerTable