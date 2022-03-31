
function openSearch()
{
    document.querySelector("#NavbarContainer").style.zIndex = "0";
    document.querySelector("#myOverlay").style.display = "block";
}
function closeSearch()
{
    document.querySelector("#NavbarContainer").style.zIndex = "1";
    document.querySelector("#myOverlay").style.display = "none";
}
function OurProductPage()
{
    window.location.href = "ourproduct.html";
}
function GoToHomePage()
{
    window.location.href = "/index";
}
function MinimalistAddToCartPage()
{
    console.log(1);
    window.location.href = "cart.html";
}
function LoginSignUpPage()
{
    console.log(1);
    window.location.href = "login.html";
}
function concernpage()
{
    window.location.href = "concern.html";
}
function knowleadgepage()
{
    window.location.href = "knowledge.html";
}
function TrackerOrder()
{
    window.location.href = "track.html";
}