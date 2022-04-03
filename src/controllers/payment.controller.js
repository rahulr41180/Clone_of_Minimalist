
const express = require("express");

const router = express.Router();

const Cart1 = require("../models/cart.model");

const Checkout1 = require("../models/checkoutpage.model");

const User1 = require("../models/register.model");

const authentication = require("../middlewares/authentication");

// router.get("", (req, res) =>
// {
//     try
//     {
//         console.log("req.cookies.cookiefilename(jwtregister) : ", req.cookies.jwtlogin);
//         res.render("payment");
//     }
//     catch(error)
//     {
//         res.status(500).send({message : error.message});   
//     }
// })

router.get("", authentication, async(req, res) =>
{
    console.log("Hello");
    let User = req.VerifiedUser;

    let Email = User.email

    const Carts = await Cart1.find().populate("productId").lean().exec();

    console.log('Carts:', Carts);

    var Total = Carts.reduce(function(c,v)
    {
        return c + Number(v.productId.Price);
    },0)

    var sum = 0;



    Carts.map((element) => 
    {
        console.log('element.productId.Price:', element.productId.Price)
        
        sum += +element.productId.Price * element.quantity;

        console.log('+element.productId.Price.slice(1).replace(",", "") * element.quantity:', +element.productId.Price * element.quantity)
    });

    console.log('Total:', Total)

    console.log('sum:', sum)

    sum = "₹ : " + sum + ".00";
    
    let ProfileDetails = await Checkout1.findOne({ email : Email }).lean().exec();

    return res.render("payment", {ProfileDetails, Carts, sum, Total, User });
});

module.exports = router;