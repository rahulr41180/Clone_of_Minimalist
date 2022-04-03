
const express = require("express");

const User1 = require("../models/register.model");

const Cart1 = require("../models/cart.model");

const OurProduct1 = require("../models/ourproduct.model");

const Checkout1 = require("../models/checkoutpage.model");

const authentication = require("../middlewares/authentication");

const router = express.Router();

// router.get("", authentication, (req,res) =>
// {
//     try
//     {
        // let User = req.VerifiedUser;

//         return res.render("checkoutPage", { User });
//     }
//     catch(error)
//     {
//         let Error = error;
//         return res.render("cart", { Error });
//     }
// })

router.get("", authentication,  async (req, res) => 
{
    
    let User = req.VerifiedUser;
    const Carts = await Cart1.find().populate("productId").lean().exec();
    console.log('Carts:', Carts)
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
    let ProfileDetails;
    return res.render("checkoutpage", {ProfileDetails, Carts, sum, Total, User });
});

router.post("", async(req,res) =>
{
    try
    {
        console.log("Hello");
        const Carts = await Cart1.find().populate("productId").lean().exec();
        console.log('Carts:', Carts)
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

        const Email = req.body.email;
        
        const CheckoutData = new Checkout1({
            fullName :  req.body.fullName,
            email : req.body.email,
            MobileNumber : req.body.MobileNumber,
            HouseNo : req.body.HouseNo,
            ApartName : req.body.ApartName,
            Street : req.body.Street,
            LandMark : req.body.LandMark,
            CityName : req.body.CityName,
            Area : req.body.Area,
            PinCode : req.body.PinCode,
        })

        const checkout = await CheckoutData.save();

        let ProfileDetails = await Checkout1.findOne({ email : Email }).lean().exec();
        
        console.log('ProfileDetails:', ProfileDetails);
        let User = await User1.findOne({email : Email}).lean().exec();
        console.log('Carts:', Carts)
        console.log('sum:', sum)
        console.log('Total:', Total)
        console.log('User:', User)
        res.status(201).render("checkoutpage", { ProfileDetails, Carts, sum, Total, User });
    }
    catch(error)
    {

        console.log(error);
        // res.status(500).render("payment");

    }
})

module.exports = router;