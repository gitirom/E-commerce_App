const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routers/user");
const authRoute = require('./routers/auth');
const productRoute = require('./routers/product');
const CartRoute = require('./routers/cart');
const OrderRoute = require('./routers/order');

dotenv.config();
app.use(express.json());   


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology :true,
})
.then(() => console.log("DB Connection Successful!"))
.catch((err) => console.log(err));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", CartRoute);
app.use("/api/orders", OrderRoute);

app.listen( process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});