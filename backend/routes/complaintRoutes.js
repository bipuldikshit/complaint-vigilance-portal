import express from "express";
const router = express.Router();
import { getComplaints, getComplaintsById, getUsersbyId } from "../controllers/complaintController.js";

router.route('/').get(getComplaints);
router.route('/complaints/:id').get(getComplaintsById);
router.route('/users/:id').get(getComplaintsById);

export default router;