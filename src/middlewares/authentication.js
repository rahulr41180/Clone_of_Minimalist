
const jwt = require("jsonwebtoken");

const User1 = require("../models/register.model");

const authentication = async(req,res,next) =>
{
    try
    {
        // get cookies from browser
        const CookieToken = req.cookies.jwtlogin;

        // Compare both CookieToken and User Token by CookieToken and Secret Key

        const VerifyUser = jwt.verify(CookieToken, process.env.JSON_WEB_SECRET_KEY);

        // console.log('VerifyUser:', VerifyUser);

        // Here we find User data with Token Id and it return promise then we use await
        const User = await User1.findOne({_id : VerifyUser._id})
        // console.log('User:', User);

        

        // this two we use in logout
        req.VerifiedToken = CookieToken;

        req.VerifiedUser = User

        next();
    }
    catch(error)
    {
        console.log('error.message:', error.message)
        // res.status(500).send({message : error.message});
        let Errors;
        return res.render("login", { Errors });
    }
}

module.exports = authentication;