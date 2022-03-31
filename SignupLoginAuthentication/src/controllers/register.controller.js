
const express = require("express");

const router = express.Router();

const User1 = require("../models/register.model");

const { body, validationResult } = require("express-validator");

console.log(11112222);

// const bodyparser = require("body-parser");

// router.use(bodyparser.urlencoded({extended : true}));

router.get("", (req,res) =>
{
    // res.send("Hello World");
    res.render("register");
})

router.post("",


body("name").isString().isLength({ min: 3, max: 20 }).withMessage("Name should be 3 to 20 characters long"),

body("email").isEmail().withMessage("Please enter a valid E-Mail address"),

body("password").not().isEmpty().withMessage("Password must be required").isLength({ min: 8, max: 20 }).custom((value) => 
{
    let Password = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,25}$/;
    if (!value.match(Password)) 
    {
        throw new Error(
            "Your password must contain at least 8 characters, one uppercase letter, one number, and one special character."
        );
    }
    return true;
})
.custom( async(value, {req}) =>
{
    if(value != req.body.confirmpassword)
    {
        throw new Error("Password and Confirm Password Should match")
    }
    return true;
}),
async(req,res) =>
{
    try
    {

        const errors = validationResult(req);
        if (!errors.isEmpty()) 
        {
            let newErrors;
            newErrors = errors.array().map((error) => 
            {
                console.log("error :", error);
                return { key: error.param, message: error.msg };
            });
            
            return res.status(400).send({ errors: newErrors });
            // return res.status(400).json({ errors: errors.array() });
        }
        console.log('errors1:', errors)

        const password = req.body.password;
        const confirmpassword = req.body.confirmpassword;
        if(password == confirmpassword)
        {
            const User = new User1({
                name : req.body.name,
                number : req.body.number,
                email : req.body.email,
                password : req.body.password,
                confirmpassword : req.body.confirmpassword,
            })

            let UserFind = await User1.findOne({ email: req.body.email }).lean().exec();

            if (UserFind) 
            {
                return res.status(500).send({ message: "Email Already Exist" });
            }

            // Method --> work with instance and here User is instance
            // Statics --> work with collections and here User1 is collections

            // Password hash
            // Add Middleware --> in register.model.js


            // Add Middleware for generate token and call it in register.model.js

            const token = await User.GenerateToken();

            // token store in cookie --> read that user login or not
            
            // The res.cookie() function is used to set the cookie name to value.
            // The value parameter may be a string or object converted to JSON.
            
            // syntax
            // res.cookie("name", whatever we store)
            // res.cookie("jwt", token);

            // and if expires after some time



            res.cookie("jwtregister", token, {
                //expires : new Date(Date.now() + 30000), // --> like after 3 sec please expire it means please login again
                httpOnly : true, // --> no client site scripting language like JavaScript can not do anything with this cookie like --> delete
                // secure : true, // -->  Cookie work for only secure connection like https but at this time we have no secure url like with https so we comment
            })
            // console.log('cookie:', cookie)

            const user = await User.save();
            console.log('user:', user)
            // return res.status(201).render(login);



            res.status(201).render("login");
            // res.status(201).send({user : user});
        }
        else
        {
            res.send("Your Password and Email Incorrect");
        }
        // console.log(req.body.name);
        // res.send(req.body.name);
    }
    catch(error)
    {
        res.status(500).send({message1 : error.message1});
    }
})



module.exports = router;