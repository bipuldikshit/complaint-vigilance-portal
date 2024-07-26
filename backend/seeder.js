import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import { users, complaints } from './data/dummyData.js';
import User from './models/userModel.js';
import Complaint from './models/complaintModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await User.deleteMany();
        await Complaint.deleteMany();

        const createdUsers = await User.insertMany(users);

        // Map complaints to created user IDs
        const sampleComplaints = complaints.map((complaint, index) => {
            return { ...complaint, user: createdUsers[index % createdUsers.length]._id };
        });

        await Complaint.insertMany(sampleComplaints);

        console.log('Data Imported!'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await User.deleteMany();
        await Complaint.deleteMany();

        console.log('Data Destroyed!'.red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
