const express = require("express");
const app = express();
const dbRoutes = require("./routes/databaseAccess.js");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect(process.env.Mongo_URI);

// This line makes the build folder publicly available.
app.use(express.static("build"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/db", dbRoutes);

app.listen(3000, () => {
  console.log("Server for React Todo App listening on port 3000!");
});
