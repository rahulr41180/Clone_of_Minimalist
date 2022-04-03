


function GoToHomePage()
{
    window.location.href = "/index"
}
function logout()
{
  window.location.href = "/logout";
}


var totalPrice = [];
var saveamount = [];
function ApplyPromoCode(sum)
{
    console.log(sum);
    totalPrice.push(max);
    var PromoCode = document.querySelector("#input").value;
    console.log('PromoCode:', PromoCode)
    if((PromoCode != "masai30") || (PromoCode == ""))
    {
      alert("Please Enter Correct Promo Code.....");
    }
    else if(PromoCode == "masai30")
    {
      var reduceamount = sum - (sum * 30) / 100;
      totalPrice.push(reduceamount);
      var save = (Totalamount * 30) / 100;
      saveamount.push(save);
      // ShowReduceAmount();
      
    }
}

function GoToPaymentPage(ProfileDetails,Carts,sum,Total,User)
{
  console.log('ProfileDetails:', ProfileDetails)
  console.log('Carts:', Carts)
  console.log('sum:', sum)
  console.log('Total:', Total)
  console.log('User:', User)

  window.location.href = `/payment`;
}
// var Showing = JSON.parse(localStorage.getItem("MinimalistShow"));

// if((Showing[Showing.length-1] == "NotShow"))
// {
//     console.log(1);

//     document.querySelector("#ProfileDetails").style.opacity = 1;
//     var Loginname = JSON.parse(localStorage.getItem("MinimalistLoginName"));
//     document.querySelector("#ProfileName").innerHTML = `Name : ${Loginname[Loginname.length-1]}`;
//     document.querySelector("#LogOut").addEventListener("click",logout);
//     var LoginName = JSON.parse(localStorage.getItem("MinimalistLoginName"))
//     var LogOut = JSON.parse(localStorage.getItem("MinimalistLogOut"));
//     var show = JSON.parse(localStorage.getItem("MinimalistShow"))
//     function logout()
//     {
//         //console.log(1);
//         if(LogOut[LogOut.length-1] == "LogOut")
//         {
//             //console.log(1);
//             alert("You want to LogOut");
//             LogOut[1] = ("SignUp");
//             LoginName[1] = ("Login");
//             show[1] = ("show");
//             localStorage.setItem("MinimalistLogOut",JSON.stringify(LogOut));
//             localStorage.setItem("MinimalistLoginName",JSON.stringify(LoginName));
//             localStorage.setItem("MinimalistShow",JSON.stringify(show));
//             window.location.href = "login.html";
//         }
//         else
//         {
//             console.log(1);

//             //
//             //alert("signup");
//             window.location.href = "login.html";
//         }
//     }

// window.location.href = "account.html";
// document.querySelector("#login-form-div").innerHTML = "";
// }
// else
// {
//     document.querySelector("#ProfileDetails").style.opacity = 0;
// }
// document.querySelector("#infoform").addEventListener("submit", savedata);
// let MainCartData = JSON.parse(localStorage.getItem("MinimalistMainCartData"));
// let Totalamount = MainCartData.reduce(function(a,b)
// {
//     return a + (b.Price*b.ItemQuantity);
// },0)
// console.log("Totalamount :", Totalamount);
// console.log('MainCartData:', MainCartData)
// var checkoutArray = [];
// function savedata(event) {
//   event.preventDefault();
//   var fname = document.querySelector("#fname1").value;
//   var lname = document.querySelector("#lname1").value;
//   var number = document.querySelector("#number2").value;
//   var House = document.querySelector("#House2").value;
//   var Apartment = document.querySelector("#Apart2").value;
//   var StreetName = document.querySelector("#Street2").value;
//   var landmark = document.querySelector("#LandMark2").value;
//   var city = document.querySelector("#City2").value;
//   var area = document.querySelector("#Area2").value;
//   var pincode = document.querySelector("#Pincode2").value;

//   var checkoutdata = {
//     FName: fname,
//     LName: lname,
//     ContactNo: number,
//     HouseNo: House,
//     Apart: Apartment,
//     Street: StreetName,
//     LandMark: landmark,
//     City: city,
//     Area: area,
//     Pincode: pincode,
//   };
//   // checkoutArray.push(checkoutdata);

//   alert("Your Information is store successfully Thank You!");
//   localStorage.setItem("MinimalistCheckOutData", JSON.stringify(checkoutdata));
//   }
// }
// var totalamount = JSON.parse(localStorage.getItem("totalAmount"));
// document.querySelector(
//   "#totalAmount"
// ).innerHTML = `: <b>Rs. ${Totalamount}</b>`;
// document.querySelector("#applycode").addEventListener("click", applyinput);

// var totalPrice = []; //--------You Access Total Amount for Payment Page by "TotalPrice" key----------
// var saveamount = [];
// totalPrice.push(Totalamount);
// localStorage.setItem("MinimalistTotalPrice", JSON.stringify(totalPrice));
// function applyinput() {
//   var inputcode = document.querySelector("#input").value;
//   //console.log(inputcode);
//   if (inputcode == "") {
//     alert("Please Apply PromoCode masai30");
//     return false;
//   }
//   if (inputcode != "masai30") {
//     alert("Please Apply Correct PromoCode");
//     return false;
//   } else {
//     // console.log(1);
//     var reduceamount = Totalamount - (Totalamount * 30) / 100;
//     // console.log(reduceamount);
//     totalPrice.push(reduceamount);
//     localStorage.setItem("MinimalistTotalPrice", JSON.stringify(totalPrice));
//     var save = (Totalamount * 30) / 100;
//     saveamount.push(save);
//     ShowReduceAmount();
//   }
// }
// function ShowReduceAmount() {
//   var SaveAmountBox = document.createElement("div");
//   SaveAmountBox.setAttribute("class", "SaveAmountBox");

//   var YourSavePrice = document.createElement("div");
//   YourSavePrice.setAttribute("class", "YourSavePrice");
//   YourSavePrice.innerHTML = "You Save";

//   var ShowSavePrice = document.createElement("div");
//   ShowSavePrice.setAttribute("class", "ShowSavePrice");
//   ShowSavePrice.innerHTML = `: <b>Rs. ${roundOff(
//     saveamount[saveamount.length - 1],
//     2
//   )}</b>`;

//   document.querySelector("#voucherbox").append(SaveAmountBox);
//   SaveAmountBox.append(YourSavePrice, ShowSavePrice);

//   //------------------------------------------------
//   //------------------------------------------------
//   var ReduceAmountBox = document.createElement("div");
//   ReduceAmountBox.setAttribute("class", "SaveAmountBox");

//   var ReducePrice = document.createElement("div");
//   ReducePrice.setAttribute("class", "YourSavePrice");
//   ReducePrice.innerHTML = "Total Amount";

//   var ShowReducePrice = document.createElement("div");
//   ShowReducePrice.setAttribute("class", "ShowSavePrice");
//   ShowReducePrice.innerHTML = `: <b>Rs. ${roundOff(
//     totalPrice[totalPrice.length - 1],
//     2
//   )}</b>`;

//   //   document.querySelector("#totalAmount").innerHTML =`Rs. ${totalPrice[totalPrice.length-1]}`;
//   document.querySelector("#voucherbox").append(ReduceAmountBox);
//   ReduceAmountBox.append(ReducePrice, ShowReducePrice);

//   document
//     .querySelector("#voucherbox")
//     .append(
//       document.querySelector("#GoToPayment"),
//       document.querySelector("#totalItemBox"),
//       document.querySelector("#ProductShowBox")
//     );
// }
// document.querySelector("#GoToPayment1").addEventListener("click", function () {
//   // console.log("heello");
//   var check = JSON.parse(localStorage.getItem("MinimalistCheckOutData"));
//   console.log('check:', check)
//   var user = checkUser(check);
//   if (user == true) {
//     var Showing = JSON.parse(localStorage.getItem("MinimalistShow"));
//     if((Showing[Showing.length-1]) == "NotShow")
//     {

//         alert("Thank You!");
//         window.location.href = "payment.html";
//     }
//     else
//     {
//         alert("Please first login your account");
//     }
//     // window.location.href = "payment.html";
//   } else {
//     alert("Please fill The form ..!");
//   }

//   //------------Here You Add Payment File Location
// });

// function checkUser(check) {
//   console.log(check);
//   if (
//     check.FName == "" ||
//     check.LName == "" ||
//     check.ContactNo == "" ||
//     check.HouseNo == "" ||
//     check.Apart == "" ||
//     check.Street == "" ||
//     check.LandMark == "" ||
//     check.City == "" ||
//     check.Area == "" ||
//     check.Pincode == ""
//   ) {
//     return false;
//   }
//   return true;
// }

// // var Product = JSON.parse(localStorage.getItem("cartData"));

// document.querySelector(
//   "#totalItemShow"
// ).innerHTML = `: ${MainCartData.length} Items`;

// MainCartData.map(function (el, index) {
//   var ttl = el.ItemQuantity * el.Price;
//   var para1 = document.createElement("p");
//   para1.setAttribute("class", "totalitems");
//   para1.innerHTML = `<b>${index + 1})</b> ${el.Title}`;

//   var para2 = document.createElement("p");
//   para2.setAttribute("class", "totalprc");
//   para2.innerHTML = `<b>Price:</b> Rs. ${ttl}`;

//   var para3 = document.createElement("p");
//   para3.setAttribute("class","totalprc");
//   para3.innerHTML = `<b>Quantity :</b> ${el.ItemQuantity}`;

//   document.querySelector("#ProductShowBox").append(para1, para2,para3);
// });

// function roundOff(value, round) {
//   return parseInt(value * 10 ** (round + 1)) -
//     parseInt(value * 10 ** round) * 10 >
//     4
//     ? parseFloat(
//         parseInt((value + parseFloat(1 / 10 ** round)) * 10 ** round)
//       ) /
//         10 ** round
//     : parseFloat(parseInt(value * 10 ** round)) / 10 ** round;
// }