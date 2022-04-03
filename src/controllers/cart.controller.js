
const express = require("express");

const User1 = require("../models/register.model");

const Cart1 = require("../models/cart.model");

const OurProduct1 = require("../models/ourproduct.model");

const router = express.Router();

router.post("", async (req, res) => 
{
    try 
    {
      const Cart = await Cart1.create(req.body);
      return res.send(Cart);
    } 
    catch(error) 
    {
      return res.send(error.message);
    }

});

router.get("", async (req, res) => 
{
  const Carts = await Cart1.find().populate("productId").lean().exec();
  console.log('Carts:', Carts)
  var Total = Carts.reduce(function(c,v)
  {

    return c + Number(v.productId.Price);
  },0)
  var sum = 0;
  Carts.map((element) => 
  {
    console.log('element.productId.Price:', element.productId.Price)
    sum += +element.productId.Price * element.quantity;
    console.log('+element.productId.Price.slice(1).replace(",", "") * element.quantity:', +element.productId.Price * element.quantity)
  });

  console.log('Total:', Total)
  console.log('sum:', sum)
  sum = "₹" + sum + ".00";
  return res.render("cart", { Carts, sum, Total });
});

router.get("/allproduct", async (req, res) => 
{
    const Carts = await Cart1.find().lean().exec();
    return res.send(Carts);
});

router.patch("/:id", async (req, res) => 
{
    try 
    {
      const Cart = await Cart1.findByIdAndUpdate(req.params.id, req.body).lean().exec();
      return res.send(Cart);
    } 
    catch (err) 
    {
      return res.send(err.message);
    }
});

router.delete("/:id", async (req, res) => 
{
    try 
    {
      const Cart = await Cart1.findByIdAndDelete(req.params.id);

      return res.send(Cart);
    //   console.log(Cart);
    } 
    catch (err) 
    {
      return res.send(err.message);
    }
});

module.exports = router;