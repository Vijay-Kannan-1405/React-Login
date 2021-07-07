const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongo
mongoose.connect("mongodb+srv://vijay:12345@cluster0.gqpeu.mongodb.net/mongo-db");

//require root
app.use("/", require("./routes/routesRoutes"));

app.listen(3001, function() {
    console.log("server run in 3001");
})