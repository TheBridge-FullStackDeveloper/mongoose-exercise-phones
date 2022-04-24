
const PhoneModel = require('../models/Phone.js');
const phones = require('../phones.json');

const create = async () => {
  try {
    await PhoneModel.deleteMany();
    console.info('> collection clean! 🗑️');
  
    await PhoneModel.insertMany(phones);
    console.info('> Phones added! 📱');
  } catch (err) {
    console.log(err)
  }
};

const main = async () => {
  await create();
  process.exit(0);
};

main();
