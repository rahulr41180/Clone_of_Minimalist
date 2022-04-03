
const express = require("express");

const router = express.Router();

const authentication = require("../middlewares/authentication");

router.get("", (req, res) =>
{
    try
    {
        console.log("req.cookies.cookiefilename(jwtregister) : ", req.cookies.jwtlogin);

        res.render("knowledge");
    }
    catch(error)
    {
        res.status(500).send({message : error.message});
    }
})

module.exports = router;