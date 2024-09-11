const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    issuedDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    returnDate: Date,
    dueDate: {
        type: Date,
        required: true
    },
    returned: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ['issued', 'returned'],
        default: 'issued'
    },
});

module.exports = mongoose.model('Issue', issueSchema);
