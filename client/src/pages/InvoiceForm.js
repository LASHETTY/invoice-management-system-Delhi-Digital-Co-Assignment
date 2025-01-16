import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  MenuItem,
  AppBar,
  Toolbar,
  IconButton,
  Alert,
  Snackbar,
} from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { invoices } from '../services/api';

const InvoiceForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    invoiceNumber: '',
    clientName: '',
    date: new Date().toISOString().split('T')[0],
    amount: '',
    status: 'Pending',
  });
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);

  const fetchInvoice = useCallback(async () => {
    try {
      const response = await invoices.getAll();
      const invoice = response.data.find((inv) => inv._id === id);
      if (invoice) {
        setFormData({
          ...invoice,
          date: new Date(invoice.date).toISOString().split('T')[0],
        });
      }
    } catch (error) {
      console.error('Error fetching invoice:', error);
      setError('Error fetching invoice details');
      setShowError(true);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchInvoice();
    }
  }, [id, fetchInvoice]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await invoices.update(id, formData);
      } else {
        await invoices.create(formData);
      }
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      setError(error.response?.data?.message || 'An error occurred while saving the invoice');
      setShowError(true);
    }
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => navigate('/')}
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {id ? 'Edit Invoice' : 'Create Invoice'}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm">
        <Box sx={{ mt: 4 }}>
          <Paper elevation={3} sx={{ padding: 4 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="invoiceNumber"
                label="Invoice Number"
                name="invoiceNumber"
                value={formData.invoiceNumber}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="clientName"
                label="Client Name"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="date"
                label="Date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="amount"
                label="Amount"
                name="amount"
                type="number"
                value={formData.amount}
                onChange={handleChange}
                inputProps={{ min: "0", step: "0.01" }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="status"
                label="Status"
                name="status"
                select
                value={formData.status}
                onChange={handleChange}
              >
                <MenuItem value="Paid">Paid</MenuItem>
                <MenuItem value="Unpaid">Unpaid</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
              </TextField>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {id ? 'Update Invoice' : 'Create Invoice'}
              </Button>
            </form>
          </Paper>
        </Box>
      </Container>
      <Snackbar
        open={showError}
        autoHideDuration={6000}
        onClose={handleCloseError}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseError} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default InvoiceForm;
