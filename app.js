var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");


const users_router = require("./routes/users_router");
const products_router = require("./routes/products_router");
const carts_router = require("./routes/carts_router");
const orders_router = require("./routes/orders_router");
const categories_router = require("./routes/categories_router");
const contact_router = require("./routes/contact_router");

const allowedOrigins = [
  "https://dnd-board-admin.onrender.com",
  "https://dnd-board-client.onrender.com",
  "https://dnd-frontend-test.onrender.com",
  "https://dnd-board.com"
];


var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  cors({
    credentials: true,
    origin: allowedOrigins,
    optionsSuccessStatus: 200,
  })
);


app.use('/users', users_router);
app.use('/products', products_router);
app.use('/carts', carts_router);
app.use('/orders', orders_router);
app.use('/categories', categories_router);
app.use('/contact', contact_router);


module.exports = app;
