const mongoose = require("mongoose");
const { Schema } = mongoose;

const PhoneSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    manufacturer: {
        type: String,
    },
    color: {
        type: String,
    },
    price: {
        type: Number,
    },
});

const Phone = mongoose.model("Phone", PhoneSchema);

module.exports = Phone;
