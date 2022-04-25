const PhoneModel = require('../models/Phone.js');
const phones = require('../phones.json');
const mongoose = require("mongoose");

const mongooseConfigs = { useNewUrlParser: true, useUnifiedTopology: true };

const create = async () => {
  try {
    await PhoneModel.insertMany(phones);
    console.info('> Phones added! 📱');
  } catch (err) {
    console.log(err)
  }
};

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/phones-store", mongooseConfigs)
  await create();
  process.exit(0);
};

main();
