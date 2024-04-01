import Sale from "../models/sales.js";
import moment from 'moment';

export const getAllSales = async (req, res) => {
  const id = req.params.id;

  try {
    if (id) {
      const sales = await Sale.findById(id);
      res.json(sales);
    } else {
      const sales = await Sale.find();
      res.json(sales);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const createSale = async (req, res) => {
  try {
    const { date, product, quantity, unitPrice, customer, salesperson } = req.body;

    const parsedDate = moment(date);
    const formattedDate = parsedDate.format('D MMMM, YYYY');

    const newSale = new Sale({
      date: formattedDate,
      product,
      quantity,
      unitPrice,
      totalAmount: quantity * unitPrice,
      customer,
      salesperson
    });

    await newSale.save();
    res.status(201).json(newSale);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err._message });
  }
};

export const deleteSale = async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.id);
    if (!sale) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    await Sale.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Sale deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const updateSale = async (req, res) => {
  const { date, product, quantity, unitPrice, customer, salesperson } = req.body;
  const saleId = req.params.id;

  try {
    const sale = await Sale.findById(saleId);
    if (!sale) {
      return res.status(404).json({ message: 'Sale not found' });
    }

    // Update sale properties
    sale.date = moment(date).format('D MMMM, YYYY');
    sale.product = product;
    sale.quantity = quantity;
    sale.unitPrice = unitPrice;
    sale.totalAmount = quantity * unitPrice;
    sale.customer = customer;
    sale.salesperson = salesperson;

    await sale.save();
    res.status(200).json(sale);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
