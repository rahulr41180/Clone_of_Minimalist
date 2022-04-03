
function OurProductPage()
{
    window.location.href = "/ourproduct/main";
}
function GoToHomePage()
{
    window.location.href = "/index";
}
function MinimalistAddToCartPage()
{
    console.log(1);
    window.location.href = "/cart";
}
function LoginSignUpPage()
{
    console.log(1);
    window.location.href = "/login";
}
function concernpage()
{
    window.location.href = "/concern";
}
function knowleadgepage()
{
    window.location.href = "/knowledge";
}
function TrackerOrder()
{
    window.location.href = "/tracker";
}
// document.querySelector("form").addEventListener("submit",SignUp);
// var SignUpData = JSON.parse(localStorage.getItem("MinimalistSignupData"))||[];
// console.log('SignUpData:', SignUpData)
// function SignUp(event)
// {
//     event.preventDefault();

//     var name = document.querySelector("#name").value;
//     var contact = document.querySelector("#contact").value;
//     var email = document.querySelector("#email").value;
//     var password = document.querySelector("#password").value; 
//     console.log(name,contact,email,password);

//     var object =
//     {
//         Name : name,
//         Contact : contact,
//         Email : email,
//         Password : password
//     };

//     SignUpData.push(object);
//     console.log(SignUpData);
//     localStorage.setItem("MinimalistSignupData",JSON.stringify(SignUpData));
//     window.location.href = "/login";
// }