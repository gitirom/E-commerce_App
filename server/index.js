const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routers/user");
const authRoute = require('./routers/auth');
const productRoute = require('./routers/product');
const CartRoute = require('./routers/cart');
const OrderRoute = require('./routers/order');
const stripeRoute = require('./routers/stripe');
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());   





mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology :true,
})
.then(() => console.log("DB Connection Successful!"))
.catch((err) => console.log(err));

app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", CartRoute);
app.use("/api/orders", OrderRoute);
app.use("/api/checkout", stripeRoute);

app.listen( process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});