const express = require('express');
const router = express.Router();
const Invoice = require('../models/Invoice');
const auth = require('../middleware/auth');

// Get all invoices
router.get('/', auth, async (req, res) => {
    try {
        const invoices = await Invoice.find({ userId: req.user._id });
        res.json(invoices);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching invoices', error: error.message });
    }
});

// Create invoice
router.post('/', auth, async (req, res) => {
    try {
        const invoice = new Invoice({
            ...req.body,
            userId: req.user._id
        });
        await invoice.save();
        res.status(201).json(invoice);
    } catch (error) {
        res.status(400).json({ message: 'Error creating invoice', error: error.message });
    }
});

// Update invoice
router.put('/:id', auth, async (req, res) => {
    try {
        const invoice = await Invoice.findOneAndUpdate(
            { _id: req.params.id, userId: req.user._id },
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!invoice) {
            return res.status(404).json({ message: 'Invoice not found' });
        }
        
        res.json(invoice);
    } catch (error) {
        res.status(400).json({ message: 'Error updating invoice', error: error.message });
    }
});

// Delete invoice
router.delete('/:id', auth, async (req, res) => {
    try {
        const invoice = await Invoice.findOneAndDelete({
            _id: req.params.id,
            userId: req.user._id
        });
        
        if (!invoice) {
            return res.status(404).json({ message: 'Invoice not found' });
        }
        
        res.json({ message: 'Invoice deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting invoice', error: error.message });
    }
});

module.exports = router;
