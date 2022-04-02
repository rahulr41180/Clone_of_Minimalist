
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
        let OurProducts;
        const q = req.query.Sorting;
        console.log('q:', q)
        if(!q)
        {
            console.log("Here");
            OurProducts = await OurProduct1.find().lean().exec();
        }
        if(q == "SortProduct")
        {
            OurProducts = await OurProduct1.find().lean().exec();
        }
        else if (q == "AlphabeticallyAZ")
        {
            OurProducts = await OurProduct1.find({AlphabeticallyAZ : "AlphabeticallyAZ"}).lean().exec();
        }
        else if (q == "AlphabeticallyZA")
        {
            OurProducts = await OurProduct1.find({AlphabeticallyZA : "AlphabeticallyZA"}).lean().exec();
        }
        else if (q == "Procelowtohigh")
        {
            OurProducts = await OurProduct1.find().sort({Price : 1}).lean().exec();
        }
        else if (q == "Pricehightolow")
        {
            OurProducts = await OurProduct1.find().sort({Price : -1}).lean().exec();
        }
        else if (q == "Datenewtoold")
        {
            OurProducts = await OurProduct1.find({Datenewtoold : "Datenewtoold"}).lean().exec();
        }
        else if (q == "Saleoff")
        {
            OurProducts = await OurProduct1.find().sort({Saleoff : -1}).lean().exec();
        }
        
        // console.log('OurProducts:', OurProducts)
        // return res.status(200).send(OurProduct);
        res.render("ourproduct", { OurProducts });
    } 
    catch (error) {
        return res.status(500).send(error);
    }
})

module.exports = router;