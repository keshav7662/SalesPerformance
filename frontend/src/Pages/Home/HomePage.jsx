// HomePage.js
import React, { useState } from 'react';
import SideBar from '../../Components/SideBar/SideBar';
import Dashboard from '../Dashboard/Dashboard';
import SalesForm from '../../Components/SalesForm/Form';
import SalesData from '../SalesData/SalesData';
import './home.css'

function HomePage() {
  const [showDashboard, setShowDashboard] = useState(true);
  const [showSalesForm, setShowSalesForm] = useState(false);
  const [showSalesData, setShowSalesData] = useState(false);
  const [dataId, setDataId] = useState();

  console.log('dataId', dataId);

  const handleItemClick = (item) => {
    setDataId();
    if (item === 'Home') {
      setShowDashboard(true);
      setShowSalesForm(false);
      setShowSalesData(false);
    } else if (item === 'Form') {
      setShowDashboard(false);
      setShowSalesForm(true);
      setShowSalesData(false);
    } else if (item === 'Data') {
      setShowDashboard(false);
      setShowSalesForm(false);  
      setShowSalesData(true);
    }
  };

  return (
    <div className='d-flex gap-4 '>
      <div className='position-fixed sidebar-container'>
        <SideBar onItemClick={handleItemClick} />
      </div>
      <div className='main-container'>
        {showDashboard && <Dashboard />}
        {showSalesForm && <SalesForm dataId={dataId} handleItemClick = {handleItemClick}/>}
        {showSalesData && <SalesData handleItemClick = {handleItemClick}  setDataId={setDataId} />}
      </div>
    </div>
  )
}

export default HomePage;
