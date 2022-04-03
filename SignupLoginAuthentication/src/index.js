
const express = require("express");

require("dotenv").config()

const path = require("path");

const cors = require("cors");

const hbs = require("hbs");

const authentication = require("./middlewares/authentication");

// const ejs = require("ejs");

const CookieParser = require("cookie-parser");

const app = express();

const static_path = path.join(__dirname, "../public");

const template_path = path.join(__dirname, "../templates/views");

// const partial_path = path.join(__dirname, "../templates/partials");

// for reading json data
app.use(express.json());

app.use(CookieParser());

// whatever data input in form we want to get it so for that -->
app.use(express.urlencoded({extended : false}));

// console.log(path.join(__dirname, "../public"));

app.use(express.static(static_path));

// app.set("view engine", "hbs");
app.set("views", template_path);

app.set("view engine", "ejs");

// hbs.registerPartials(partial_path);

app.use(cors());

const UserController = require("./controllers/register.controller");
const LoginController = require("./controllers/login.controller");
const OurProductController = require("./controllers/ourproduct.controller");
const KnowledgeController = require("./controllers/knowledge.controller");
const LogoutController = require("./controllers/logout.controller");
const IndexController = require("./controllers/index.controller");
const ProductDetailsController = require("./controllers/productdetails.controller");
const CartController = require("./controllers/cart.controller");
const UserProfileController = require("./controllers/userProfile.controller");
const CheckoutpageController = require("./controllers/checkoutpage.controller");
const PaymentController = require("./controllers/payment.controller");


app.use("/register", UserController);
app.use("/login", LoginController);
app.use("/ourproduct", OurProductController);
app.use("/knowledge", KnowledgeController);
app.use("/logout", LogoutController);
app.use("/index", IndexController);
app.use("/productdetails", ProductDetailsController);
app.use("/cart", CartController);
app.use("/userprofile", UserProfileController);
app.use("/checkoutpage", CheckoutpageController);
app.use("/payment", PaymentController);

app.get("/concern", (req,res) =>
{
    // res.send("Hello World");
    res.render("concern");
})

app.get("/otp", (req,res) =>
{
    // res.send("Hello World");
    res.render("otp");
})

app.get("/success", (req,res) =>
{
    // res.send("Hello World");
    res.render("success");
})


app.get("/tracker",authentication, (req,res) =>
{
    // res.send("Hello World");
    res.render("tracker");
})

module.exports = app;