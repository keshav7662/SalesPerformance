import express from "express";
import { getAllSales, createSale, deleteSale, updateSale } from "../controller/salesController.js";

const router = express.Router();

router.get('/sales/:id?', getAllSales);

// Route to create a new sale
router.post('/sales', createSale);

// Route to delete a sale
router.delete('/sales/:id', deleteSale);

// Route to update a sale
router.put('/sales/:id', updateSale);


export default router;