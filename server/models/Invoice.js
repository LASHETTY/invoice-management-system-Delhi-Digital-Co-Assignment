const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    invoiceNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    clientName: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    status: {
        type: String,
        required: true,
        enum: ['Paid', 'Unpaid', 'Pending'],
        default: 'Pending'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
});

// Auto-generate invoice number before saving
invoiceSchema.pre('save', async function(next) {
    if (!this.invoiceNumber) {
        const count = await mongoose.model('Invoice').countDocuments();
        this.invoiceNumber = `INV-${(count + 1).toString().padStart(6, '0')}`;
    }
    next();
});

const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;
