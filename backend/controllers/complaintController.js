import asyncHandler from '../middleware/asyncHandler.js';
import Complaint from '../models/complaintModel.js';

//@desc    Fetch all Complaints
//@route   GET/ api/ dummyData/ complaints
//@access  Public
const getComplaints = asyncHandler(async (req, res) => {
    const complaints = await complaints.find({});
    res.json({ users, complaints });
 });

//@desc    Fetch a Complaints
//@route   GET/ api/ dummyData/ complaints:id
//@access  Public
 const getComplaintsById = asyncHandler(async (req, res) => {
    const complaints = await complaints.findById(req.params.id);
    if (complaints) {
        res.json(complaints);
    } else {
        res.status(404);
        throw new Error('Resource not found');
    }
});

//@desc    Fetch a user
//@route   GET/ api/ dummyData/ user:id
//@access  Public
    const getUsersbyId = asyncHandler(async (req, res) => {
        const users = await users.findByID(req.params.id);
    if (users) {
        res.json(users);
    } else {
        res.status(404);
        throw new Error('Resource not found');
    }
});

export {getComplaints, getComplaintsById, getUsersbyId };
