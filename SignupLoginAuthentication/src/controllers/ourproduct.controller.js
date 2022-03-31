
const express = require("express");

const router = express.Router();

const OurProduct1 = require("../models/ourproduct.model");

// router.get("", (req,res) =>
// {
//     res.render("ourproduct");
// })

router.get("", async(req,res) =>
{
    try 
    {
        const OurProduct = await OurProduct1.find({_id : "624411387966cd371b564e70"})
        .lean().exec();
        
        console.log('OurProduct:', OurProduct)
        // return res.status(200).send(OurProduct);
        res.render("ourproduct");
    } 
    catch (error) {
        return res.status(500).send(error);
    }
})

module.exports = router;