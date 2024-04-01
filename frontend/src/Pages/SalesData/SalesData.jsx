import React, { useEffect, useState } from 'react';
import './salesData.css';
import SalesService from '../../Services/SalesServices';
import SalesTable from '../../Components/SalesTable/SalesTable';

function SalesData({handleItemClick, setDataId}) {
  const [salesReport, setSalesReport] = useState([]);
  const [saleId, setSaleId] = useState();
  const [deleteConfirmation, setDeleteConifrmation] = useState(false);
  const getSalesData = async () => {
    const response = await SalesService.getAllSales();
    setSalesReport(response);
  };
  useEffect(() => {
    getSalesData();
  }, [])

  const deleteData = async (saleId) => {
    const deleteData  = await SalesService.deleteSale(saleId);
    setDeleteConifrmation(false);
    getSalesData();
  }

  if(deleteConfirmation){
    deleteData(saleId)
  }
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <table className="table table-bordered text-center">
        <thead>
          <tr className='table-head fs-5'>
            <th >S.no</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Amount</th>
            <th>Customer</th>
            <th>Sales Person</th>
            <th colSpan={2}></th>
          </tr>
        </thead>
        <tbody>
          {salesReport.map((data, index) => {
            return <SalesTable data={data} key={index} index={index} setSaleId = {setSaleId} setDeleteConifrmation={setDeleteConifrmation} handleItemClick={handleItemClick} setDataId={setDataId}/>
          })}


        </tbody>
      </table>
    </div>
  );
}

export default SalesData;
