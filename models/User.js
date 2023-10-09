import mongoose from 'mongoose';
// const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, // required field
        unique: true, // unique field
    },
    email: {
        type: String,
        required: true, // required field
        unique: true, // unique field
    },
    password: {
        type: String,
        required: true, // required field
        unique: true, // unique field
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
},
{ timestamps: true} // createdAt, updatedAt
);

export default mongoose.model('User', UserSchema);