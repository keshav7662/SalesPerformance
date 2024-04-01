import React, { useEffect, useState } from 'react';
import SalesService from '../../Services/SalesServices';

const SalesForm = ({ dataId, handleItemClick}) => {
  const [formData, setFormData] = useState({
    date: '',
    product: '',
    quantity: '',
    unitPrice: '',
    customer: '',
    salesperson: ''
  });

  useEffect(() => {
    const getFormDataById = async (id) => {
      try {
        const editingData = await SalesService.getAllSales(id);
        editingData.date = editingData.date.slice(0, 10);
        setFormData(editingData);
      } catch (error) {
        console.log(error);
      }
    };

    if (dataId) {
      getFormDataById(dataId);
    }
  }, [dataId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await SalesService.createSale(formData);
      if(response){
        handleItemClick('Home');
      }
      
    } catch (error) {
      console.log(error)
    }
  };

  const hanldeUpdateButton = async (e) => {
    const updateSale = await SalesService.updateSale(dataId, formData);
    if(updateSale){
      handleItemClick('Home');
    }
  }

  return (
    <form onSubmit={handleSubmit} className='mx-5 my-4 px-5 py-3 shadow rounded d-flex flex-column gap-2'>
      <div className="">
        <label htmlFor="date" className="form-label">Date:</label>
        <input type="date" className="form-control" id="date" name="date" value={formData.date} onChange={handleChange} />
      </div>
      <div className="">
        <label htmlFor="product" className="form-label">Product:</label>
        <input type="text" className="form-control" id="product" name="product" placeholder="Enter the product name" value={formData.product} onChange={handleChange} />
      </div>
      <div className="">
        <label htmlFor="quantity" className="form-label">Quantity:</label>
        <input type="number" className="form-control" id="quantity" name="quantity" placeholder="Enter the quantity" value={formData.quantity} onChange={handleChange} />
      </div>
      <div className="">
        <label htmlFor="unitPrice" className="form-label">Unit Price:</label>
        <input type="number" className="form-control" id="unitPrice" name="unitPrice" placeholder="Enter the unit price" value={formData.unitPrice} onChange={handleChange} />
      </div>
      <div className="">
        <label htmlFor="customer" className="form-label">Customer:</label>
        <input type="text" className="form-control" id="customer" name="customer" placeholder="Enter the customer name" value={formData.customer} onChange={handleChange} />
      </div>
      <div className="">
        <label htmlFor="salesperson" className="form-label">Salesperson:</label>
        <input type="text" className="form-control" id="salesperson" name="salesperson" placeholder="Enter the salesperson name" value={formData.salesperson} onChange={handleChange} />
      </div>
      <div className='d-flex justify-content-end'>
      {dataId ?
        <button type="button" className="btn btn-primary" onClick={hanldeUpdateButton}>Update</button>
        :
        <button type="submit" className="btn btn-primary">Submit</button>
      }
      </div>
     
    </form>
  );
};

export default SalesForm;
