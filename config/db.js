// Importar mongoose

const mongoose = require("mongoose");

const mongooseConfigs = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect("mongodb://localhost/phones-store", mongooseConfigs)                                                           //  el seeds.js crea phones-store entonces aquí tiene que estar con el mismo nombre. 
  .then(() => console.log("> successfully connected to mongoDB 💿"))
  .catch((error) => {
    console.error("> error trying to connect to mongoDB: ", error.message);
    process.exit(0);
  });
