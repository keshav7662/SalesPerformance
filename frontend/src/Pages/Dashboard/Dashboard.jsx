import React, { useEffect, useState } from 'react';
import BarChart from '../../Components/SalesCharts/BarChart';
import LineChart from '../../Components/SalesCharts/LineChart';
import PieChart from '../../Components/SalesCharts/PieChart';
import "bootstrap/dist/css/bootstrap.min.css";
import SalesService from '../../Services/SalesServices';

const Dashboard = () => {
  const [salesData, setSalesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SalesService.getAllSales();
        const salesDetails = response || [];
        const years = salesDetails.map(data => new Date(data.date).getFullYear());

        setSalesData({
          labels: years,
          datasets: [{
            label: "Sales Profit",
            data: salesDetails.map(data => data.totalAmount),
            backgroundColor: [
              "#27187E",
              "#758BFD",
              "#FF8600",
              "#AEB8FE",
              "#F1F2F6",
            ],
            borderColor: "black",
            borderWidth: 2,
          }]
        });
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='d-flex gap-4'>
      <div className='d-flex flex-wrap gap-5 align-items-center mt-5 p-2 mx-auto'>
        {salesData && (
          <>
            <div className='border border-2 shadow rounded' style={{ width: `45%` }}>
              <BarChart chartData={salesData} />
            </div>
            <div className='border border-2 shadow rounded' style={{ width: `45%` }}>
              <LineChart chartData={salesData} />
            </div>
            <div className='border border-2 shadow rounded' style={{ width: `35%` }}>
              <PieChart chartData={salesData} className='' />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
