import mongoose from 'mongoose';

const complaintSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'Pending'
    },
    priority: {
        type: String,
        required: true,
        default: 'Low'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true,
});

const Complaint = mongoose.model('Complaint', complaintSchema);

export default Complaint;
