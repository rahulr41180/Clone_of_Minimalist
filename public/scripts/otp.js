
let MinimalistmainData = JSON.parse(localStorage.getItem("MinimalistMainCartData"));

console.log('MinimalistmainData:', MinimalistmainData)

function ResendOtp()
{
    window.location.href = "/otp";
}
document.querySelector("#btn").addEventListener("click", function () {
    var otp = document.querySelector("#otp").value;
    if (otp == 1234) {
      cartArr = [];
      localStorage.setItem("cartData", JSON.stringify(cartArr));
      alert("Thank You!")
    //   window.location.href = "success.html";
        alert("Thank You! After 10 second you will get your tracker Id");
        let MinimalistRandomId = Math.round(Math.random()*11111);
        setTimeout(function()
        {
            alert(`Your tracker id is ${MinimalistRandomId} and you can track your product with this tracker Id Thank You`);
            localStorage.setItem(`MinimalistRandomId${MinimalistRandomId}`,JSON.stringify(MinimalistmainData));
            let Data = JSON.parse(localStorage.getItem("MiniMalistAddToCart"));
            Data.splice(0);
            localStorage.setItem("MiniMalistAddToCart",JSON.stringify(Data));
            window.location.href = "/success"
        },10000);
    } else {
      alert("OTP not matched");
      ResendOtp();
    }
  });