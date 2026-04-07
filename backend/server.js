const mongoose = require("mongoose");
const dotenv = require("dotenv");
process.on('uncaughtException', (err)=>{
  console.log('UNCAUGHT EXCEPTION! Shutting down ...');
  console.log(err.name, err.message);
  process.exit(1)
})
dotenv.config({ path: "./config.env" });
const app = require("./app");
const port = process.env.PORT || 3000;
const DB = process.env.DB_URI;

mongoose
  .connect(DB)
  .then(() => console.log("mongoDB connect successful!"))
  .catch((error) => {
    console.log(error);
  });
app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});

process.on('unhandledRejection', (err)=>{
  console.log('UNHANDLE REJECTION! Shutting down ...');
  console.log(err.name, err.message);
  process.exit(1)
})