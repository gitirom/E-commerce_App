const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userTest = require("./router/user");

dotenv.config();
app.use(express.json());   


mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
    console.log(err);
});

app.use("/api/users", userTest);

app.listen( process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});