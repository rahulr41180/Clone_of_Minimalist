
const express = require("express");

const router = express.Router();

const authentication = require("../middlewares/authentication");

router.get("", authentication, async(req,res) =>
{
    try
    {
        // console.log('req.VerifiedUser:', req.VerifiedUser)
        // console.log('req.VerifiedToken:', req.VerifiedToken)

        // I want to delete which to by use we logout from our database by -->
        // logout only single device
        // req.VerifiedUser.tokens = req.VerifiedUser.tokens.filter((element) =>
        // {
        //     // console.log('element:', element)
        //     if(element.token == req.VerifiedToken)
        //     {
        //         console.log('element.token:', element.token)
                
        //         console.log('req.VerifiedToken:', req.VerifiedToken)
        //     }
        //     return element.token != req.VerifiedToken
        // })
        // console.log('req.VerifiedUser.tokens:', req.VerifiedUser.tokens)

        // logout from all device by -->
        req.VerifiedUser.tokens = [];
        
        // if we want user logout then we need to delete cookie from browser by -->
        
        res.clearCookie("jwtlogin");
        
        await req.VerifiedUser.save(); // this is a promise then we use await because we send request then we wait for response
        
        console.log("logout successfully");
        let Errors;
        res.render("login", { Errors });
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }
})

module.exports = router;