import mongoose from "mongoose";

const workerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    department: { type: String, required: true },
    startDate: { type: Date, required: true },
    shift: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    emergencyResponder: { type: Boolean, required: true },
    additionalDetails: { type: String }
});

const Worker = mongoose.model('Worker', workerSchema);
export default Worker;