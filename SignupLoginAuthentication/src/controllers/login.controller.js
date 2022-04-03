
const express = require("express");

const User1 = require("../models/register.model");

const OurProduct1 = require("../models/ourproduct.model");

const authentication = require("../middlewares/authentication");

const router = express.Router();

router.get("", authentication, (req,res) =>
{
    
    // console.log('req:', req)
    console.log("User1 : ", req.VerifiedUser);
    let User = req.VerifiedUser;

    res.render("userProfile", { User })
    // let data = "Hello";
    // res.render("login");
})

router.post("", async(req,res) =>
{
    try
    {
        const email = req.body.email;
        const password = req.body.password;

        const User = await User1.findOne({email : email});


        let Errors;
        if(!User)
        {
            Errors = "Wrong Email or Password";
            console.log('Errors:', Errors)
            return res.render("login", { Errors })
            // return res.status(500).send("Wrong Email or Password");
        }
        // if(!error)
        // {
        //     console.log("Hello Hello");
        // }
        // Add middle ware for checking password match with our database
        const match = await User.checkPassword(password);
        
        console.log('match:', match)
        if(!match)
        {
            

            Errors = "Wrong Email or Password";
            console.log('Errors:', Errors)
            return res.render("login", { Errors })
            // return res.status(500).send({message : "Wrong Email and Password"});
            
        }

        // Add Middleware for generate token

        const token = await User.GenerateToken();
        console.log('tokenlogin:', token)

        //res.cookie("jwt", token);
        res.cookie("jwtlogin", token, {
           // expires : new Date(Date.now() + 600000), // --> like after 3 sec please expire it means please login again
            httpOnly : true, // --> no client site scripting language like JavaScript can not do anything with this cookie like --> delete
            // secure : true, // -->  Cookie work for only secure connection like https but at this time we have no secure url like with https so we comment
        })
        // console.log('cookie:', cookie)
        
        // get cookie


        // Now we don't use directly here because use of token is for if use authenticate then then it land our home page or cart page or ourproduct page or product detail page and so on
        // means we use get cookie in another page where we want authenticate system
        // like in knowledge page
        console.log("req.cookies.cookiefilename(jwtregister) : ", req.cookies.jwtregister);

        const Products = await OurProduct1.find().lean().exec();

        
        // window.location.href = `/userprofile`

        console.log('User:', User)
        res.render("userProfile", { User });
        // if(User.password == password)
        // {
        //     res.status(201).render("index");
        // }
        // else
        // {
        //     res.status(500).send("Email Password are incorrect");
        // }

        
        // res.send(User);
        // console.log('User:', User)

        // console.log('email:', email)
        // console.log('password:', password)

    }
    catch(error)
    {
        return res.status(500).send({message1 : error.message1});
    }
})

module.exports = router;