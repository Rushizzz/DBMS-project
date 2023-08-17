import React from 'react'
import '../Styles/Page.css'
import CustomerTable from '../components/CustomerTable'

function Home() {
  return (
    <div className='page'>
        <CustomerTable/>
    </div>
  )
}

export default Home