const mongoose = require("mongoose");
const { Schema } = mongoose;

const PhoneSchema = new Schema({});

const Phone = mongoose.model("Phone", PhoneSchema);

module.exports = Phone;