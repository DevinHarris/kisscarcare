import mongoose from 'mongoose';
import { nanoid } from 'nanoid';
const Schema = mongoose.Schema;

const CustomerModel = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true

    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },

    zipCode: {
        type: String,
        required: true
    },
    licensePlate: {
        type: String,
    },
    id: {
        type: String,
        required: true,
        default: () => nanoid(8),
        unique: true
    }
})

export const Customer = mongoose.model('Customer', CustomerModel);
