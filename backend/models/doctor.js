import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema({
    DocName: {
        type: String,
        required: true
    },
    DocEmail: {
        type: String,
        required: true,
        unique: true
    },
    Docpass: {
        type: String,
        required: true
    },
    DocImage: {
        type: String, required: true
    },
    DocExperience: {
        type: String,
        reuired: true
    },
    DocFee: {
        type: Number,
        required: true
    },
    DocSpecility: {
        type: String,
        required: true
    },
    DocEducation: {
        type: String,
        required: true
    },
    Docaddress: {
        type: Object, required: true,
    },
    DocAvailable: {
        type: Boolean, default: true
    },
    DocDate: {
        type: Number, required: true
    },
    Docabout: {
        type: String,
        required: true
    },
    Docslots_booked: {
        type: Object, default: {}
    },
},
    { minimize: false }
);
const doctorModel = mongoose.models.doctor || mongoose.model("doctor", doctorSchema);
export default doctorModel;