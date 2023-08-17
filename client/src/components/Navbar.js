import React from 'react'
import '../Styles/Navbar.css';
import userCircle from '../icons/Group 2.png';
import customersIcon from '../icons/group.png';
import addCustomerIcon from '../icons/add-user.png';
import deleteIcon from '../icons/delete.png'
import updateIcon from '../icons/refresh.png'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='Navbar'>
    
            <div className="logo">
                <img src={userCircle} />
            </div>
            
            <div className="elements">
                <ul>
                      <Link to={'/home'} className='ele'>
                            <img src={customersIcon}  />
                            <p>Customer Records</p>
                      </Link>
                      <Link to={'/addconnection'} className='ele'>
                            <img src={addCustomerIcon}  />
                            <p>Add Customer</p>
                      </Link>
                      <Link to={'/update'} className='ele'>
                            <img src={updateIcon}  />
                            <p>Update Customer</p>
                      </Link>
                      <Link to={'/delete'} className='ele'>
                            <img src={deleteIcon}  />
                            <p>Delete Customer</p>
                      </Link>
                </ul>
            </div>

    </div>
  )
}

export default Navbar