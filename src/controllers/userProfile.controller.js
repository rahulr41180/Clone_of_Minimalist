
const express = require("express");

const User1 = require("../models/register.model");

const Cart1 = require("../models/cart.model");

const OurProduct1 = require("../models/ourproduct.model");

const authentication = require("../middlewares/authentication");

const router = express.Router();

router.get("/successorder", authentication, async(req,res) =>
{
    try
    {
        const Cart = await Cart1.collection.drop();

        let User = req.VerifiedUser;

        return res.render("userProfile", { User })
    }
    catch(error)
    {
        const Products = await OurProduct1.find().lean().exec();
        return res.status(500).render("index", { Products });
    }
})

module.exports = router;