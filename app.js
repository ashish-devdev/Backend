const mongoose = require("mongoose");

//  DB connection
mongoose.connect("mongodb+srv://ashish:ashish@cluster0.jfm0m.mongodb.net/arthematics", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const express = require("express");
const product = require("./router/arthematic"); //imports routes
const app = express();
const cors = require("cors");
const fileupload = require("express-fileupload");

const port = 3002;
const bodyParser = require("body-parser");
app.use(cors());
app.use(fileupload());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/arthematic-operations", product);

// Health Route check
app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});