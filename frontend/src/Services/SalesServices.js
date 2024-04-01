import axios from 'axios';
import { toast } from "react-toastify"

const Backend_Url = process.env.REACT_APP_BACKEND_BASE_URL;

const SalesService = {
  // Get all sales or a particular sale by Id
  getAllSales: async (id) => {
    try {
      let response;
      if (id) {
        response = await axios.get(`${Backend_Url}/${id}`);
        return response.data;

      } else {
        response = await axios.get(Backend_Url);
        response.data.sort((a, b) => new Date(a.date) - new Date(b.date));
        console.log(response);
        return response.data;
      }

    } catch (error) {
      console.error('Error while fetching all sales:', error);
      throw error;
    }
  },

  // Create a new sale
  createSale: async (saleData) => {
    console.log(saleData)
    try {
      const response = await axios.post(Backend_Url, saleData);
      if (response) {
        toast.success("Data added successfully!...")
      }
      return response.data;
    } catch (error) {
      toast.error(error.error);
      console.error('Error while creating a new sale:', error);
      throw error;
    }
  },

  // Delete a sale by ID
  deleteSale: async (saleId) => {
    try {
      const response = await axios.delete(`${Backend_Url}/${saleId}`);

      return response.data;
    } catch (error) {
      console.error(`Error while deleting sale with ID ${saleId}:`, error);
      throw error;
    }
  },

  // Update a sale by ID
  updateSale: async (saleId, saleData) => {
    try {
      const response = await axios.put(`${Backend_Url}/${saleId}`, saleData);
      if (response) {
        toast.success("Data updated successfully!...")
      }
      return response.data;
    } catch (error) {
      console.error(`Error while Updating sale with ID ${saleId}:`, error);
      throw error;
    }
  }
}

export default SalesService;