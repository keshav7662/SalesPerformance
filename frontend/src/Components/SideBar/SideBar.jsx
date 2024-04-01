// SideBar.js
import React from 'react';

const SideBar = ({ onItemClick }) => {
  const handleItemClick = (item) => {
    onItemClick(item);
  };

  return (
    <div className='min-vh-100 shadow-lg' style={{ backgroundColor: '#F1F2F6' }}>
      <div className='pt-3 d-flex flex-column justify-content-between align-items-center' style={{ height: '100vh' }}>
        <h2 className='text-center fw-bolder text-decoration-underline' style={{ color: '#27187E' }}>VizVista</h2>
        <div className='w-100'>
          <ul className='list-unstyled d-flex flex-column gap-2 mx-2 fs-6'>
            <li className='text-center py-2 border rounded' role='button' onClick={() => handleItemClick('Home')}>Home</li>
            <li className='text-center py-2 border rounded' role='button' onClick={() => handleItemClick('Form')}>Form</li>
            <li className='text-center py-2 border rounded' role='button' onClick={() => handleItemClick('Data')}>Data</li>
            <li className='text-center py-2 border rounded' role='button'>About us</li>
          </ul>
        </div>
        <div className='w-100'>
          <button className='w-100 py-2 text-white fs-4 border-0' style={{ backgroundColor: '#FF8600' }}>Log in</button>
        </div>
      </div>
    </div>
  )
}

export default SideBar;
