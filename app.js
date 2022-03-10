const process = require('process'); // Required to mock environment variables
const express = require("express");
const cors = require("cors");
const app = express();
require('./src/routes/database');
//settings
const PORT = parseInt(process.env.PORT) || 8080;

//middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));
//app.use(express.urlencoded({ limit: "50mb" }));

//routes
app.use("/", require("./src/routes/servicios"));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
  
  module.exports = app;
