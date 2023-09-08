require("colors")
const mongoose = require("mongoose");

const path = require('path');
const configPath = path.join(__dirname,'..','config','.env');
require('dotenv').config({ path: configPath });


const app = require("./app");
mongoose.set("strictQuery", true);

const { DB_HOST, PORT = 5000 } = process.env;


mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
    console.log("Database connect success");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });