
const PhoneModel = require('../models/Phone.js');
const phones = require('../phones.json');

const create = async () => {
  await PhoneModel.deleteMany({});
  console.info('> collection clean! 🗑️');

  await PhoneModel.insertMany(phones);
  console.info('> Phones added! 📱');
};

const main = async () => {
  await create();
  process.exit(0);
};

main();
