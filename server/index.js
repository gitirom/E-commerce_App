const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userTest = require("./routers/user");
const authRoute = require('./routers/auth');
const productRoute = require('./routers/product');

dotenv.config();
app.use(express.json());   


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology :true,
})
.then(() => console.log("DB Connection Successful!"))
.catch((err) => console.log(err));

app.use("/api/users", userTest);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);

app.listen( process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});