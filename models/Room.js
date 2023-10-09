import mongoose from 'mongoose';
// const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // required field  
    },
    price: {
        type: Number,
        required: true, // required field
    },
    maxPeople: {
        type: Number,
        required: true, // required field
    },
    desc: {
        type: String,
        required: true, // required field
    },
    roomNumbers: [{number: Number, unavailableDates:{type:[Date]}}],
},
{ timestamps: true} // createdAt, updatedAt
);

export default mongoose.model('Room', RoomSchema);