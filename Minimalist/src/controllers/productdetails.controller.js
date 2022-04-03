
const express = require("express");

const User1 = require("../models/register.model");

const OurProduct1 = require("../models/ourproduct.model");

const router = express.Router();

router.get("/:id", async(req,res) =>
{
    try
    {
        const Products = await OurProduct1.findById(req.params.id).lean().exec();
        console.log('Products:', Products)

        res.render("productdetails", { Products });
    }
    catch(error)
    {
        res.status(400).send({message : error.message});
    }
    // let data = "Hello";
    // res.render("index");
})

module.exports = router;