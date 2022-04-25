// Importar mongoose
const mongoose = require("mongoose");

const mongooseConfigs = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect("METER LA STRING A LA BBDD", mongooseConfigs)
  .then(() => console.log("> successfully connected to mongoDB 💿"))
  .catch((error) => {
    console.error("> error trying to connect to mongoDB: ", error.message);
    process.exit(0);
  });
