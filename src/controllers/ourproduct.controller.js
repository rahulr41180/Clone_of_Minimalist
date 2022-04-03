
const express = require("express");

const router = express.Router();

const OurProduct1 = require("../models/ourproduct.model");

router.get("/mains", async(req,res) =>
{
    const OurProducts = await OurProduct1.find().lean().exec();

    res.render("ourproduct", { OurProducts });
})


router.get("/sort", async(req,res) =>
{
    try 
    {
        // const OurProducts = await OurProduct1.find().lean().exec();

        var OurProducts;

        var q = req.query.Sorting;
        console.log('req.query:', req.query)
        console.log('req:', req.query.Sorting);
        // console.log('q1:', q1)
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
            OurProducts = await OurProduct1.find().sort({Title : 1}).lean().exec();
        }
        else if (q == "AlphabeticallyZA")
        {
            OurProducts = await OurProduct1.find().sort({Title : -1}).lean().exec();
        }
        else if (q == "Pricelowtohigh")
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
        
        console.log('OurProducts:', OurProducts)
        // return res.status(200).send(OurProduct);
        res.render("ourproduct", { OurProducts });
    } 
    catch (error) {
        return res.status(500).send(error);
    }
})

router.get("/items", async(req,res) =>
{
    try
    {
        console.log("/items");
        var OurProducts;
        const q = req.query.item;
        console.log('q:', q)
        OurProducts = await OurProduct1.find().limit(q).lean().exec();
        res.render("ourproduct", { OurProducts });
        
    }
    catch(error)
    {
        return res.status(500).send(error);
    }
})

router.get("/collectionfilter", async(req,res) =>
{
    try
    {
        console.log("/top");
        var OurProducts;
        const q = req.query.collection;
        // console.log('q:', q)
        OurProducts = await OurProduct1.find({q : `${q}`}).lean().exec();
        console.log('OurProducts:', OurProducts)
        res.render("ourproduct", { OurProducts });
        
    }
    catch(error)
    {
        return res.status(500).send(error);
    }
})

router.get("/Vendorfilter", async(req,res) =>
{
    try
    {
        console.log("/top");
        var OurProducts;
        const q = req.query.Vendor;
        // console.log('q:', q)
        OurProducts = await OurProduct1.find({q : `${q}`}).lean().exec();
        console.log('OurProducts:', OurProducts)
        res.render("ourproduct", { OurProducts });
        
    }
    catch(error)
    {
        return res.status(500).send(error);
    }
})

router.get("/Tagsfilter", async(req,res) =>
{
    try
    {
        console.log("/top");
        var OurProducts;
        const q = req.query.Tags;
        // console.log('q:', q)
        OurProducts = await OurProduct1.find({q : `${q}`}).lean().exec();
        console.log('OurProducts:', OurProducts)
        res.render("ourproduct", { OurProducts });
        
    }
    catch(error)
    {
        return res.status(500).send(error);
    }
})

router.get("/Discountfilter", async(req,res) =>
{
    try
    {
        var OurProducts;
        const q = req.query.Discount;
        console.log('q:', q)
        if(q == "5%10%")
        {
            console.log("/top");
            OurProducts = await OurProduct1.find().limit(5).lean().exec();
        }
        if(q == "10%15%")
        {
            OurProducts = await OurProduct1.find().skip(5).limit(5).lean().exec();
        }
        if(q == "15%20%")
        {
            OurProducts = await OurProduct1.find().skip(10).limit(5).lean().exec();  
        }
        if(q == "20%25%")
        {
            OurProducts = await OurProduct1.find().skip(15).limit(5).lean().exec();  
        }
        if(q == "25%30%")
        {
            OurProducts = await OurProduct1.find().skip(17).limit(5).lean().exec();  
        }
        // console.log('OurProducts:', OurProducts)
        res.render("ourproduct", { OurProducts });
        
    }
    catch(error)
    {
        return res.status(500).send(error);
    }
})



module.exports = router;